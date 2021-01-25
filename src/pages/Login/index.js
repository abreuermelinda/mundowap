import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import AlertDanger from '../../components/AlertDanger';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Login extends Component {
  state = {
    account: '',
    username: '',
    password: '',
    erro: '',
  };

  onChangeInput = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  handleLogin() {
    const { account, username, password } = this.state;

    if (!this.validade()) return;
    this.props.handleLogin({ account, username, password }, (err) => {
      console.log(err);
      /* this.setState({erro: {message: err.erro.message}}); */
    });
  }

  validade() {
    const { account, username, password } = this.state;

    if (!account)
      return this.setState({ erro: { message: 'Preencha o campo Conta!' } });
    if (!username)
      return this.setState({ erro: { message: 'Preencha o campo Usuário!' } });
    if (!password)
      return this.setState({ erro: { message: 'Preencha o campo Senha!' } });

    return true;
  }

  render() {
    const { account, username, password, erro } = this.state;
    return (
      <>
        <div className="container-login">
          <div className="login card shadow">
            <Form className="form-signin text-center">
              <img
                className="mb-4"
                src="images/logo-mundowap.png"
                alt="Mundo Wap"
                width="260"
                height="39"
              />
              <AlertDanger erros={erro} />
              <FormGroup>
                <Label for="account">Conta</Label>
                <Input
                  type="text"
                  value={account}
                  name="account"
                  id="account"
                  placeholder="Número da conta"
                  onChange={(event) => this.onChangeInput('account', event)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="username">Usuário</Label>
                <Input
                  type="text"
                  value={username}
                  name="username"
                  id="username"
                  placeholder="Usuário"
                  onChange={(event) => this.onChangeInput('username', event)}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password">Senha</Label>
                <Input
                  type="password"
                  value={password}
                  name="password"
                  id="password"
                  placeholder="Senha"
                  onChange={(event) => this.onChangeInput('password', event)}
                />
              </FormGroup>

              <Button
                color="primary btn-block"
                size="lg"
                onClick={() => this.handleLogin()}
              >
                Acessar
              </Button>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, actions)(Login);
