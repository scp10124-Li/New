import { Menu, Form, Container} from "semantic-ui-react";
import React from 'react'

function Signin(){
    const [activeItemm, setActiveItem] = React.useState('register');
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return(
        <div>
            <Container>
                <Menu widths={2}>
                    <Menu.Item 
                        active = {activeItemm === 'register'}
                        onClick={() => setActiveItem('register')}
                        name="註冊"/>
                    <Menu.Item 
                        active = {activeItemm === 'signin'}
                        onClick={() => setActiveItem('signin')}
                        name="登入"/>
                </Menu>
                <Form>
                    <Form.Input 
                        label = "信箱" 
                        value={email} 
                        onChange ={(e) => setEmail(e.target.value)} 
                        placeholder="請輸入信箱"/>
                    <Form.Input 
                        label = "密碼" 
                        onChange ={(e) => setPassword(e.target.value)} 
                        value={password} 
                        placeholder="請輸入密碼"
                        type="password"
                        />
                    <Form.Button>
                        {activeItemm === 'register' && '註冊'}
                        {activeItemm === 'signin' && '登入'}
                    </Form.Button>
                </Form>
            </Container>
        </div>
    );
}

export default Signin;