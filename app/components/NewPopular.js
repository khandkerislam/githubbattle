import React from 'react'

export default class NewPopular extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
        
        this.updateLanguage = this.updateLanguage.bind(this)

    }
    updateLanguage(selectedLanguage){
        this.setState({
            selectedLanguage
        })
    }
    render(){
        const languages = ['All','JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        const {selectedLanguage} = this.state
        return(
            <ul className = 'flex-center'>
                {languages.map((language)=>(
                    <li key = {language}>
                        <button className = 'btn-clear nav-link' style = { language === selectedLanguage ? {color: 'rgb(187, 46, 31)'}:null }
                            onClick={() => this.updateLanguage(language)}
                        >{language}</button>
                    </li>
                ))}
            </ul>
    
        )
    }
}