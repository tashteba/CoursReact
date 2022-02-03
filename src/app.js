
function Header() {
    return (<div>
        <h1>La maison jungle</h1>
    </div>)
}

//function Description() {
//  return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)}

//function Description(){
 //   const text = "yeees"
  //  return (<p> { text }</p>)}


function Description () {
    const text = "ici achetez toutes les planets dont vous avez toujours rêvées"
    const emojis = "🤑🤑🤑"
    return (<p> { text +emojis}</p>)
}

function Banner () {
    const titre = "my shop"
    return (<div><h1>{ titre.toUpperCase() }</h1></div>)
}


//function Description2() {
//    return (<p>hay another example</p>)}

// ReactDOM.render(<div><Header /><Description /><Description2/></div>, document.getElementById("root"))

function Carte () {
    const monstera = 8
    const lierre = 10
    const fleurs = 15

    return (<div><h1>Panier</h1>
    <ul>
        <li>monstera {monstera}</li>
        <li>lierre {lierre}</li>
        <li>fleurs {fleurs}</li>

    </ul> <h2>total = {monstera + lierre + fleurs}</h2></div>
    
    )
}

ReactDOM.render(<React.Fragment><Header /><Description /><Banner/><Carte /></React.Fragment>, document.getElementById("root"))
