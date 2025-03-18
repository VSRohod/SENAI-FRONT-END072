<?php
    // inicia sessão
    session_start();

    class Produto{
        public $id;
        public $nome;
        public $valor;
        public $desc;

        public function __construct($id,$nome,$valor,$desc){
            $this->id = $id;
            $this->nome = $nome;
            $this->valor = $valor;
            $this->desc = $desc;
        }
    }

    // public - qualquer parte do código mexe no atributo
    // private - apenas o que está dentro do class


    // verifica se carrinho está null
    if(!isset($_SESSION['carrinho'])){
        $_SESSION['carrinho'] = [];
    }

    // adiciona um produto
    if(isset($_GET['produto'])){
        $produtoDados = new Produto($_GET['id'],$_GET['produto'],$_GET['valor'],$_GET['desc']);
        $_SESSION['carrinho'][] = $produtoDados ;
    }

    if(isset($_GET['deletarCarrinho'])){
        // session_destroy();
        $_SESSION['carrinho'] = [];
    }

    if (isset($_GET['removerItem'])) {
        foreach ($_SESSION['carrinho'] as $id => $produto) {
            if ($produto->id == $_GET['removerItem']) {
                unset($_SESSION['carrinho'][$id]);
                $_SESSION['carrinho'] = array_values($_SESSION['carrinho']);
            }
        }
    }

    

    // var_dump($_SESSION['carrinho']);

    

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="?id=1&produto='SSD'&valor=199.99&desc='1T de armazenamento'">Adicionar SSD</a>
    <a href="?id=2&produto=Disco de memória&valor=50.00&desc='Um disco Top'">Adicionar Disco de memória</a>
    <a href="?id=3&produto=Memória RAM&valor=180.00&desc='Corsair 16G'">Adicionar Memória RAM</a>
    <a href="?id=4&produto=Placa mãe&valor=120.00&desc='Baratinho!'">Adicionar Placa mãe</a>
    <!-- deletar -->
    <a href="?deletarCarrinho=True">Deletar Carrinho</a>

    <?php
        $valorTotal = 0;

        foreach($_SESSION['carrinho'] as $produto){
            $valorTotal += $produto->valor;
        }

        if($valorTotal == 0){
            echo "O carrinho está vazio";
        }else{
            echo "O valor total R$ $valorTotal";
        }
    ?>

    <ol>
        <?php 
            // foreach(array as alias){}
            // foreach(filmes as filme){ filme.nome , filme.desc }
            foreach($_SESSION['carrinho'] as $produto){
                echo "<li> 
                        <h1> $produto->nome </h1>
                        <p> R$ $produto->valor </p>
                        <p> $produto->desc </p>
                        <a href='?removerItem=$produto->id'> x </a>
                      </li>";
            }
        ?>
    </ol>
</body>
</html>