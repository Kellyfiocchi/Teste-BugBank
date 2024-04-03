Funcionalidade: Login na plataforma Orange HRM

    Como usuário Admin da  Orange HRM
    Quero fazer o login na plataforma com sucesso
    Para acessar as funcionalidades do sistema

    Cenário: Login com sucesso

    Dado que eu esteja na página de login
    Quando eu informar o usuário <usuario> e a <senha> corretos
    E clicar no botão "Login"
    Então devo ser direcionado para a página inicial da plataforma

    Exemplo:
    | usuario | senha   |
    | Admin   | admin123|


    Cenário: Login com usuário null

    Dado que eu esteja na página de login
    Quando eu informar o usuário <usuario> nulo e a <senha> correta
    E clicar no botão "Login"
    Então devo visualizar a mensagem de erro "Requis"

    Exemplo:
    | usuario | senha    |
    |         | admin123 |

    Cenário: Login com senha null

    Dado que eu esteja na página de login
    Quando eu informar o usuário <usuario> correto e a <senha> nula
    E clicar no botão "Login"
    Então devo visualizar a mensagem de erro "Requis"

       Cenário: Login com usuário inválido

    Dado que eu esteja na página de login
    Quando eu informar o usuário <usuario> inválido e a <senha> correta
    E clicar no botão "Login"
    Então devo visualizar a mensagem de erro "Invalid credentials"

    Exemplo:
    | usuario  | senha    |
    | Admin1   | admin123 |
   

    Cenário: Login com senha inválida

    Dado que eu esteja na página de login
    Quando eu informar o usuário <usuario> correto e a <senha> inválida
    E clicar no botão "Login"
    Então devo visualizar a mensagem de erro "Invalid credentials" 

    Exemplo:
    | usuario | senha    |
    | Admin   | admin1234|

    Cenário: Redefinir senha

    Dado que eu esteja na página de login
    Quando eu clicar no link "Forgot your password?"
    E informar o <usuario> e clicar no botão "Reset Password"
    Então devo visualizar a mensagem de sucesso "Reset Password link sent successfully"

    Exemplo:
    | usuario |
    | Admin   |

    
