import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Upload,
  Message,
  message,
} from "antd";
import { useState } from "react";
import { ForkOutlined } from "@ant-design/icons";
import { API_URL } from "../config/constants";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const history = useHistory();
  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/lectures`, {
        name: values.name,
        description: values.description,
        motivator: values.motivator,
        price: parseInt(values.price),
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
        history.replace("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`에러가 발생했습니다. ${error.message}`);
      });
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="강의 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">강사 사진</div>}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>이미지를 업로드해 주세요.</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">강사명</div>}
          name="motivator"
          rules={[{ required: true, message: "강사명을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">강의명</div>}
          name="name"
          rules={[{ required: true, message: "강의명을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="강의명을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">가격</div>}
          name="price"
          rules={[{ required: true, message: "가격을 입력해주세요" }]}
        >
          <InputNumber
            defaltValue={0}
            className="upload-price"
            size="large"
            placeholder="가격을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">강의 소개</div>}
          name="description"
          rules={[{ required: true, message: "강의 내용을 적어주세요" }]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={500}
            placeholder="강의 내용을 적어주세요"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            업로드
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
