import React from 'react'
import { Container, Content } from './styles'


export default function Card({ promotion, promotions, onOpenNewModal }) {
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
                <img src={promotions.imageUrl } alt="Promotion" />
                <div>
                    <h1>{promotions.title}</h1>
                    <span>R$ {promotions.price}</span>
                    <footer>
                        {promotions.comments.length > 0 && (
                            <span>"{promotions.comments[0].comment}"</span>
                        )}

                        <div>{promotions.comments.length} {' '}
                            Comentário{promotions.comments.length > 1 ? 's' : ''}
                        </div>
                        <a href={promotions.url} target="_blank" rel="noreferrer">
                            IR PARA O SITE
                        </a>
                        
                    </footer>
                </div>
            </Content>

            <p>
                Quer receber essas e outras ofertas, cadastre-se em nossa
                plataforma para ficar por dentro de tudo o que vai rolar
                no maior e melhor site de e-commerce do Brasil.
            </p>
            
           
                <button type="button" onClick={onOpenNewModal} >Cadastrar-se </button>
            
        </Container>
    )
}
