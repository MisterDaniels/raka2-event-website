const recebeHTML = require('./gerarPDF.html')

function CriaPDF(recebeHTML) {
    var minhaTabela = document.getElementById('tabela').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 20px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CRIA UM OBJETO WINDOW
    var win = window.open('', '', 'height=1000,width=1000');

    win.document.write('<html><head>');
    win.document.write('<title>Certificado</title>');   // <title> CABEÇALHO DO PDF.
    win.document.write(style); // INCLUI UM ESTILO NA TAB HEAD
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(minhaTabela); // O CONTEUDO DA TABELA DENTRO DA TAG BODY
    win.document.write('</body></html>');

    win.document.close(); // FECHA A JANELA

    win.print();// IMPRIME O CONTEUDO
}