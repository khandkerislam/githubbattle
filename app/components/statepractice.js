import React from 'react'

export default class newPopular extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
        
        this.updateLanguage = this.updateLanguage.bind();
    }

    updateLanguage (test){
        this.setState({
            test
        })
    }


    render(){
        const languages = ['All','Javascript','CSS','Java'];
        const {selectedLanguage} = this.state 
        return (
            <ul className = 'flex-center'>
                {languages.map((language)=>(
                    <li key = {language}>
                        <button className = 'btn-clear nav-link' style = {language === selectedLanguage ? {color: 'rgb(187, 46, 31)'} : null}
                        onClick={()=>  updateLanguage(language) }>
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}