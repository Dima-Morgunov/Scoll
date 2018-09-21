import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import './AdminPageStyle/AdminLoginPage.css'

class LoginAdminPage extends Component {
    state = {
        data: {
            email: "",
            password: "",
            remember_me:true
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
                .submit(this.state.data)
                /*.catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                );*/
        }
    };

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    render() {
        const { data, errors, loading } = this.state;

        return (
            <Form onSubmit={this.onSubmit} loading={loading} className="ui container">
                {errors.global && (
                    <Message negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{errors.global}</p>
                    </Message>
                )}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                   {/* {errors.email && <InlineError text={errors.email} />}*/}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange}
                    />
{/*                    {errors.password && <InlineError text={errors.password} />}*/}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}
export default LoginAdminPage;