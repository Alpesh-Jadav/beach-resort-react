import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'


export default class Services extends Component {

    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: 'there are many free drinks available in our hotel for get  free cocktails kindly fast book your room in our hotel.'
                
               
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "there are many free drinks available in our hotel for get  free cocktails kindly fast book your room in our hotel."
                
               
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info: 'there are many free drinks available in our hotel for get  free cocktails kindly fast book your room in our hotel.'
                
               
            },
            {
                icon:<FaBeer/>,
                title:"Strongest beer",
                info: 'there are many free drinks available in our hotel for get  free cocktails kindly fast book your room in our hotel.'
                
               
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />

                <div className="services-center">
                    {this.state.services.map((item,index)=> {
                        return <article key={index} className="service">

                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>

                        </article>
                    })}
                </div>
                
                    
                
            </section>
        )
    }
}
