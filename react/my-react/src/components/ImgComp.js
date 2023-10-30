export default function ImgComp(props){
    const cat = 'animals/adorable-animal-animal-photography-1170986-thumbnail.png'
    const bird = 'graphics/bird-thumbnail.jpg'
    function getUrl(things){
        return(
            "https://static.remove.bg/sample-gallery/"+things
        )
    }
    return(
        <>
        <h1>{props.name}</h1>
        <img src={getUrl(cat)} alt="image" width={100}/>
        </>
   
    )
}