export default function Profile(){
    const persons = [
        {
            name:'Macaw',
            id:1,
            img:'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYXd8ZW58MHx8MHx8fDA%3D&w=1000&q=80' 
        },
        {
            name:'Pink parrot',
            id:2,
            img:'https://i.pinimg.com/736x/a7/f3/9f/a7f39f402b2cafd96aa6883acbe5e334.jpg'
        },
        {
            name:'Cocktail',
            id:3,
            img:'https://worldbirds.com/wp-content/uploads/2020/08/cockatiel10.jpg'
        }
    ]
    const result = persons.map(data=>(
        <>
        <h2 style={{colour:'black'}} className="name">{data.name}</h2>
        <img src={data.img} />
        </>
    ))
    return(
        <>
        {result}
        </>
    )
}