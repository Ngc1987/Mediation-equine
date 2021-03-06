import React, { useEffect, useRef } from "react";
import "./ForWho.scss";
import ImageSection from "../../Components/ImageSection/ImageSection";
import Title from "../../Components/Title/Title";

import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoPrimitiveDot } from "react-icons/go";

// Interface for the cmponent props
export interface Props  {
	className: string;
	ariaHidden: boolean;
}

const ForWho:React.FC<Props> = ({className, ariaHidden}) => {

	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Create a refs array
	const revealRefs = useRef<HTMLParagraphElement[]>([]);
    revealRefs.current = [];
	// Put all the refs needed on the refs array
    const addToRefs = (el: HTMLParagraphElement):void => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

	// Create the little anim on scroll for each ref
	useEffect(() => {
		revealRefs.current.forEach((el, index) => {
			
			gsap.to(el,  {
				duration: 1,
				opacity: 1,
				ease: "Expo.easeOut",
				y:0,
				scrollTrigger: {
					id: `section-${index+1}`,
					trigger: el,
					start: 'top bottom-=30',
					end: 'bottom bottom-=70',
					toggleActions: 'play none none reverse',
					// markers: true
				}
			});
		});
	}, []);

	console.log(ariaHidden)
	return (

			<section className={`forwho ${className}`} data-pin="pinSection" aria-hidden={ariaHidden}>

				<Title 
					className="forwho__title" 
					title="La médiation équine" 
					subtitle="Oui mais pour qui ?"
					ariaHidden={ariaHidden} />

				<div className="forwho__content">

					<ImageSection 
						className="forwho__content-image" 
						src={"/assets/forwho.jpg"} 
						alt="Une petite fille fait un câlin à un cheval" />


					<div className="forwho__content-article" >
						<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>La médiation équine s'adresse à toute personne, dans ses dimensions psychiques et corporelles, enfant, adolescent, ou adulte. Elle permet le temps d'une séance, de se retrouver, se ressourcer et se recentrer sur elle même. </p>
						<br />
						<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
							Mais elle peut aussi être très bénéfique pour certaines problématiques, allant des difficultés d'apprentissage, sociales ou familiales, aux troubles du spectre autistique.
						</p>
						<br />
						<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>La médiation équine peut aussi s'adresser aux personnes à la recherche d'un bien-être, suite à une perte de confiance en soi, une dépression, un deuil récent, ou après avoir développé des symptômes de stress post-traumatique (Crises d’angoisse, troubles du sommeil, alimentaires ou affectifs…)</p>
						<br />
						<h4 ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>Objectifs de la médiation équine :</h4>
						<br />
						
								<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
									<GoPrimitiveDot/>Développer la conscience du corps
								</p>
								<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
									<GoPrimitiveDot/>Améliorer l'intime et la confiance en soi
								</p>
								<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
									<GoPrimitiveDot/>Faciliter le partage des émotions
								</p>
								<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
									<GoPrimitiveDot/>Encourager les initiatives
								</p>
								<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
									<GoPrimitiveDot/>Entraîner les capacités de tolérance et d'adaptation au changement
								</p>
								<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
									<GoPrimitiveDot/>Solliciter l'attention 
								</p>
								<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
									<GoPrimitiveDot/>Faciliter le repérage dans le temps et l'espace
								</p>
						
						<br />
						<h4 ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0} style={{fontSize: "1.8rem"}}>Bénéfices de la médiation équine :</h4>
							<br />
							<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
								<GoPrimitiveDot/> Améliore la coordination, l'équilibre, la dextérité motrice, la communication, la concentration et l'attention.
							</p>
							<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
								<GoPrimitiveDot/> Un effet physiologique positif, baisse les hormones du stress...
							</p>
							<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
								<GoPrimitiveDot/> Permet de s'épanouir, prendre plaisir, s'exprimer, s'autonomiser, prendre confiance en soi, s'affirmer.
							</p>
							<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
								<GoPrimitiveDot/> Favorise un lien affectif et développe l'empathie.
							</p>
							<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
								<GoPrimitiveDot/> A un effet positif sur le cerveau et apaise et favorise l'exploration visuelle et vocale.
							</p>
							<p ref={addToRefs}  tabIndex={ariaHidden ? -1 : 0}>
								<GoPrimitiveDot/> Le cheval a ses propres besoins et peut exprimer son désaccord. Cela entraîne des comportements interactifs.
							</p>
								
							<br />
							<br />
						
						<h4 ref={addToRefs} tabIndex={ariaHidden ? -1 : 0}><em>"</em> Aussi loin et aussi vite que l'on aille, on est toujours à sa juste place <br /> sur le dos d'un cheval. <em>"</em></h4>
					</div>
				</div>

			</section>
	)
}

export default ForWho;
