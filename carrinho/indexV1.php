<?php

    // inicia sessão
    session_start();

    // verifica se carrinho está null
    if(!isset($_SESSION['carrinho'])){
        $_SESSION['carrinho'] = [];
    }

    // adiciona um produto
    if(isset($_GET['produto'])){
        // NOMEVARIAVEL[INDICEVAZIO] = PRODUTO -> PODE SER ADICIONADO
        // SUBSTITO DO +=
        $_SESSION['carrinho'][] = $_GET['produto'];
    }

    if(isset($_GET['deletarCarrinho'])){
        // session_destroy();
        $_SESSION['carrinho'] = [];
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
    <a href="?produto=SSD">Adicionar SSD</a>
    <a href="?produto=Disco de memória">Adicionar Disco de memória</a>
    <a href="?produto=Memória RAM">Adicionar Memória RAM</a>
    <a href="?produto=Placa mãe">Adicionar Placa mãe</a>
    <!-- deletar -->
    <a href="?deletarCarrinho=True">Deletar Carrinho</a>

    <ol>
        <?php 
            // foreach(array as alias){}
            // foreach(filmes as filme){ filme.nome , filme.desc }
            foreach($_SESSION['carrinho'] as $produto){
                echo "<li> $produto </li>";
            }
        ?>
    </ol>
</body>
</html>