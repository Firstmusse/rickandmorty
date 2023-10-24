export const CorrectNameEpisode = (name) =>{

   let separator = name.split('')

    let outputSeason = 'Сезон-'
    let outputEpisode = ' Серия-'

    let correct = separator.map((letter, i)=>{
       if (separator[i] === "S"){
           letter = outputSeason
       }
        if (separator[i] === "E"){
            letter = outputEpisode
        }
        return letter
    })
    return(correct.join(''))
}

