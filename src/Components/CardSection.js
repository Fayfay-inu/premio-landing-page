import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import card from '../img/creditcard.svg';

function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                         PREMIO
                        </h2>
                        <p>
                            Nous souhaitons rendre honneur au fruit du travail acharné des artistes, à travers ces objets intemporels que sont les décernements.
Ces artistes rêvent tous les jours de pouvoir mettre la main sur les plus prestigieux trophées de leur catégorie pendant que nous rêvons de les en voir décorés. 
Premio permet aux fans de faire un pas en avant vers leurs stars et de partager leur réussite comme cela n'a jamais été fait auparavant.

                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 845px){
            grid-template-columns: repeat(1, 1fr);
        }
        .card-right{
            display: flex;
            justify-content: flex-end;
            img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
        }

        .card-left{
            p{
              
                padding: 1rem 0;
            }
        }
    }
`;

export default CardSection
