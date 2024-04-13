import { Form, Input, Button, Card } from 'antd';
import './index.css'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const route = useNavigate()
    const onFinish = (values) => {
        console.log('Received values:', values);
        // 在此处执行登录逻辑，例如向后端发送请求
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const toRoom = ()=>{
        route('/rooms')
    }
    return (
        <div className='login-bg'>
            <Card title="Login" className="login-card">
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" className="login-form-button" onClick={toRoom}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginForm;
