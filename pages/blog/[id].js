const EntradaBlog = () => {
    return <div>EntradaBlog</div>
}

export async function getServerSideProps({ query: { id } }) {
    const url = `http://localhost:1337/blogs/${id}`
    console.log(url);
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    console.log(entrada);
    return {
        props: {},
    }
}

export default EntradaBlog
