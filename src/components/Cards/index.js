import React from 'react'
import { Container, Content } from './styles'

export default function Card({ promotion }) {
    return (
        <Container>
            <Content>
                <img src={promotion.imageUrl } alt="Promotion" />
                <div>
                    <h1>{promotion.title}</h1>
                    <span>R$ {promotion.price}</span>
                    <footer>
                        {promotion.comments.length > 0 && (
                            <span>"{promotion.comments[0].comment}"</span>
                        )}

                        <div>{promotion.comments.length} {' '}
                            Comentário{promotion.comments.length > 1 ? 's' : ''}
                        </div>
                        <a href={promotion.url} target="_blank" rel="noreferrer">
                            IR PARA O SITE
                        </a>
                        
                    </footer>
                </div>
            </Content>
            <Content>
                <img src={promotion.imageUrl } alt="Promotion" />
                <div>
                    <h1>{promotion.title}</h1>
                    <span>R$ {promotion.price}</span>
                    <footer>
                        {promotion.comments.length > 0 && (
                            <span>"{promotion.comments[0].comment}"</span>
                        )}

                        <div>{promotion.comments.length} {' '}
                            Comentário{promotion.comments.length > 1 ? 's' : ''}
                        </div>
                        <a href={promotion.url} target="_blank" rel="noreferrer">
                            IR PARA O SITE
                        </a>
                        
                    </footer>
                </div>
            </Content>
            <Content>
                <img src={promotion.imageUrl } alt="Promotion" />
                <div>
                    <h1>{promotion.title}</h1>
                    <span>R$ {promotion.price}</span>
                    <footer>
                        {promotion.comments.length > 0 && (
                            <span>"{promotion.comments[0].comment}"</span>
                        )}

                        <div>{promotion.comments.length} {' '}
                            Comentário{promotion.comments.length > 1 ? 's' : ''}
                        </div>
                        <a href={promotion.url} target="_blank" rel="noreferrer">
                            IR PARA O SITE
                        </a>
                        
                    </footer>
                </div>
            </Content>
        </Container>
    )
}
