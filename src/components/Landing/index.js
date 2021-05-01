import React from 'react';
import {Fragment} from 'reactNode';
import '../../App.css';
import './landing.css';
import '../barChrono.css';
import '../Tooltip';

<link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"/>

const Landing = () => { 
    return (
            <Fragment>
                <div className = 'landingOpeningText'>
                    <h2>La procédure en cas de loyer impayé</h2>
                    <text>
                        <p>
                            La plupart des cas de loyers impayés se règlent facilement après un échange humain avec le locataire. <br/>
                            Dans tous les cas, Unkle rembourse votre impayé sous 30 jours sans franchise ni délai de carence. <br/>
                            Notre équipe d’experts vous assiste durant l'ensemble de la procédure loyer impayé.
                        </p>
                    </text>
                </div>

                <div class="container">
                    <table className='BarChrono'>
                        <tr>
                            <th scope="col" span id='J1'><a href={'https://blog.unkle.fr/fr/855/proprietaire-bailleur-mon-locataire-ne-paie-plus-son-loyer-que-faire/'}>Jour 1</a></th>
                            <th scope="col" span id='J30'><a href={'https://unkle.typeform.com/to/HXsjtCuL'}>+30 jours</a></th>
                            <th scope="col" span id='J45'><a href={'https://aide.unkle.fr/fr/articles/quest-ce-qui-est-pris-en-charge-par-unkle'}>+45 jours</a></th>
                            <th scope="col" span id='J60'><a href={'https://aide.unkle.fr/fr/articles/2981900-procedure-d-expulsion'}>2 mois plus tard</a></th>
                            <th scope="col" span id='J120'><a href={'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033974972/'}>Entre 1 et 4 mois plus tard</a></th>
                        </tr>
                    </table>
                </div>

                <Tooltip></Tooltip>

                <section className="choixGarantieLoyer">
                        <div className= "texteCentreVerticalement">
                        <a href={'https://www.unkle.fr/application/new/landlord'}>Choisir une garantie de loyer impayé</a>
                        </div>
                </section>
            </Fragment>
    );
}
export default Landing;