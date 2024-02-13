import Button, { ButtonProps } from "@/ui/button";
import Container from "@/ui/container";
import Heading from "@/ui/headings";
import Input from "@/ui/input";
import Margin from "@/ui/margin";
import Padding from "@/ui/padding";
import Text from "@/ui/text";
import { Checkbox, Form, Space } from "antd";
import { useState } from "react";

const sizes = ["xLarge", "large", "medium", "small", "xSmall"];

export default function StyleSystem({}) {
  const [size, setSize] = useState<ButtonProps["size"]>("medium");

  const handleSizeChange = (e: any) => {
    setSize(e.target.value as ButtonProps["size"]);
  };

  return (
    <Container>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
      <Heading as="h7">Heading 7</Heading>

      <Text size="26">Text 26</Text>
      <Text size="26" semibold>
        Text 26
      </Text>
      <Text size="26" bold>
        Text 26
      </Text>

      <Padding all={{ xs: 5, sm: 10, md: 15 }}>Padding</Padding>
      <Margin all={{ xs: 5, sm: 10, md: 15 }}>Margin</Margin>

      <div>
        <div>
          <label htmlFor="size-select">Select size: </label>
          <select id="size-select" value={size} onChange={handleSizeChange}>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem",
            marginTop: "1rem",
            background: "#f5f5f5",
            padding: 10,
          }}
        >
          <Button
            fill="solid"
            color="light"
            roundness="pill"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="solid"
            color="light"
            roundness="rounded"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="solid"
            color="light"
            roundness="sharp"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>

          <Button
            fill="solid"
            color="dark"
            roundness="pill"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="solid"
            color="dark"
            roundness="rounded"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="solid"
            color="dark"
            roundness="sharp"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>

          <Button
            fill="outline"
            color="light"
            roundness="pill"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="outline"
            color="light"
            roundness="rounded"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="outline"
            color="light"
            roundness="sharp"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>

          <Button
            fill="outline"
            color="dark"
            roundness="pill"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="outline"
            color="dark"
            roundness="rounded"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            fill="outline"
            color="dark"
            roundness="sharp"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>

          <div style={{ display: "flex", gap: 10 }}>
            <Button
              fill="solid"
              color="light"
              roundness="rounded"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="solid"
              color="light"
              roundness="pill"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="solid"
              color="light"
              roundness="sharp"
              type="square"
              size={size}
            >
              arrow
            </Button>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Button
              fill="outline"
              color="light"
              roundness="rounded"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="outline"
              color="light"
              roundness="pill"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="outline"
              color="light"
              roundness="sharp"
              type="square"
              size={size}
            >
              arrow
            </Button>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Button
              fill="solid"
              color="dark"
              roundness="rounded"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="solid"
              color="dark"
              roundness="pill"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="solid"
              color="dark"
              roundness="sharp"
              type="square"
              size={size}
            >
              arrow
            </Button>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Button
              fill="outline"
              color="dark"
              roundness="rounded"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="outline"
              color="dark"
              roundness="pill"
              type="square"
              size={size}
            >
              arrow
            </Button>
            <Button
              fill="outline"
              color="dark"
              roundness="sharp"
              type="square"
              size={size}
            >
              arrow
            </Button>
          </div>

          <Button
            color="light"
            type="text"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            color="dark"
            type="text"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>

          <Button
            color="light"
            type="underline"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
          <Button
            color="dark"
            type="underline"
            size={size}
            leftIcon="arrow"
            rightIcon="arrow"
          >
            Get Started
          </Button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "1rem",
            marginTop: "1rem",
            background: "#f5f5f5",
            padding: 10,
          }}
        >
          <Input hint="Please select one field" />
          <Input textArea rows={3} />
          <Input rightIcon="arrow" type="password" />
          <Input leftIcon="arrow" />
          <Input
            placeholder="Write some text"
            leftIcon="arrow"
            rightIcon="arrow"
          />
          <Input
            placeholder="Write some text"
            disabled
            leftIcon="arrow"
            rightIcon="arrow"
          />
          <Input leftIcon="arrow" buttonText="Signup" />
          <Input leftIcon="arrow" disabled buttonText="Signup" />
          <Input leftIcon="arrow" buttonText="Signup" />
          <Input
            selectOptions={[
              {
                label: "+977",
                value: "+977",
              },
              {
                label: "+80",
                value: "+80",
              },
            ]}
            leftIcon="arrow"
          />

          <Input hint="Please select one field" variant="line" />
          <Input textArea rows={3} variant="line" />
          <Input rightIcon="arrow" variant="line" />
          <Input leftIcon="arrow" variant="line" />
          <Input leftIcon="arrow" rightIcon="arrow" variant="line" />
          <Input leftIcon="arrow" buttonText="Signup" variant="line" />
          <Input leftIcon="arrow" buttonText="Signup" variant="line" />
          <Input
            selectOptions={[
              {
                label: "+977",
                value: "+977",
              },
              {
                label: "+80",
                value: "+80",
              },
            ]}
            leftIcon="arrow"
            variant="line"
          />
        </div>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          layout="vertical"
        >
          <Space direction="vertical" size="small" style={{ width: "100%" }}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Space>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
        <Heading> Heading</Heading>
      </div>
    </Container>
  );
}
