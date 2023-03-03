class Messages{
    ok =(): string => "ok";
    success=(): string=> "Sucesso!";
    welcomeMessage=(): string => "Bem-vindo!";
    pageNotFound=(): string => "Página Não Encontrada";
    created =(): string => "Artigo Criado!";
    updated =(): string => "Artigo Atualizado";
    deleted =(): string => "Artigo Eliminado";
    error=(): string => "Ocorreu um erro";
    notFound =(): string=> "Este artigo não existe";
}

export default Messages;