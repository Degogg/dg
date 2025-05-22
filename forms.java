public class Forms {
    private String nome;
    private String email;
    private String mensagem;

    // Construtor
    public Forms(String nome, String email, String mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    // Método para exibir os dados do formulário
    public void exibirFormulario() {
        System.out.println("Nome: " + nome);
        System.out.println("Email: " + email);
        System.out.println("Mensagem: " + mensagem);
    }

    // Método principal para teste
    public static void main(String[] args) {
        // Exemplo de uso (pode ser adaptado com entrada do usuário ou Servlet)
        Forms form = new Forms("João", "joao@email.com", "Adoro a rádio!");
        form.exibirFormulario();
    }
}
