<template>
    <section id="info" class="container index">
        <section data-aos="zoom-in" >
            <div class="left">
                <p class="greeting">
                    {{languageSelected === 'PT' ? pt.greeting : en.greeting }}, 
                </p>   

                <p class="introduction">
                    {{languageSelected === 'PT' ? pt.introduction : en.introduction }}
                </p>
                
                <div class="holds-picture">
                        <img src="../assets/ey.jpg" alt="">
                </div>
                   
                <div class="bio"> 
                    <p class="name">Fernando Santos Ferreira</p>

                    <p class="description">
                        <pre class="text-center">{{languageSelected === 'PT' ? pt.bioDescription : en.bioDescription }}</pre>
                    </p>
                </div>

                <div class="social-links-div">
                    <a class="social-link" target="_blank" href="https://www.linkedin.com/in/fernando-ferreira-52319918b/">
                        <img class="social-link-icon" src="../assets/linkedin-icon.png" alt="Link para o perfil no LinkedIn">
                    </a>
                    <a class="social-link github" target="_blank" href="https://github.com/ffersants">
                        <img class="social-link-icon" src="../assets/github-icon.png" alt="Link para o perfil no LinkedIn">
                    </a>
                </div>
            </div>

            <div class="right">
                <p class="greeting">
                    {{languageSelected === 'PT' ? pt.greeting : en.greeting }}, 
                </p>
                <p class="introduction">
                    {{languageSelected === 'PT' ? pt.introduction : en.introduction }}
                </p>

                <p class="description">
                {{languageSelected === 'PT' ? pt.description : en.description }}
                </p>
            </div>   
        </section>

        <footer>
            <i>
                <font-awesome-icon class="down" rotation="180" size="4x" icon="sort-up" />
            </i>   
        </footer> 
    </section>  
</template>

<script>
export default {
    name: "Index",
    data(){
        return {
            languageSelected: window.localStorage.getItem("languageSelected"),
            en: {
                bioDescription: "A guy from techinal support\nthat wishes to become a front-end developer",
                greeting: "Hi",
                introduction: "my name is Fernando!",
                description: `I'm studying Analyses and Development of Systems,
                                in the Catholic University from Brasilia (UCB) and preparing myself
                                to work developing web applications.`
            },
            pt: {
                bioDescription: `Um carinha do suporte\naspirante a desenvolvedor front-end`,
                greeting: "Olá",
                introduction: "eu sou o Fernando!",
                description: `Estou cursando Análise e Desnvolvimento de Sistemas,
                                na Universidade Católica de Brasília (UCB) e preparando-me
                                para trabalhar com desenvolvimento de aplicações web.`
            }

        }
    },
    beforeCreate(){
        this.emitter.on("Language changed", () => this.languageSelected = window.localStorage.getItem("languageSelected"))
    }
    
}
</script>

<style scoped>
    .index{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    section {
        display: flex;
    }
    .left, .right {
        width: 100%;
    }

    .description {
        font-size: 1.5em;
    }

    .left{
        text-align: center;
    }

    .left .holds-picture img{
        clip-path: circle(50.2% at 50% 50%);
        width: 180px;
    }

    .left .greeting{
        display: none;
    }

    .left .introduction{
        display: none;
    }

    .left .name{
        font-size: 2em;
    }

    .left .social-links-div{
        margin-top: 1em;
        text-align: center;
    }

    .left .social-links-div .social-link-icon{
        width: 30px;
        margin-right: 15px;
    }

    .left .social-links-div .github{
        width: 32px;
        margin-left: 15px;
    }

    .right .greeting {
        font-size: 4em;
        color: var(--action-color);
    }

    .right .introduction {
        font-size: 3em;
        font-weight: 400;
        margin-bottom: .7em;
        color: var(--action-color);
    }

    .down{
        color: var(--action-color);
    }

    .down:hover{
        cursor: pointer;
    }

    footer{
        text-align: center;
        /* width: 100%; */
    }   

    footer i {
        display: inline-block;
        animation-name: jumping;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    @keyframes jumping {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }

    @media (max-width: 767px){        
        .index{
            justify-content: space-around;
        }

        section {
            font-size: 11px;
            flex-direction: column;
        }

        .left .holds-picture img{
            width: 120px;
        }

        .left .greeting{
            display:block;
            margin-top: 0.5em;
            font-size: 3.5em;
            color: var(--action-color);
        }

        .left .introduction{
            display:block;
            font-size: 2.5em;
            font-weight: 400;
            margin-bottom: .7em;
            color: var(--action-color);
        }

        .right{
            text-align:center;
            margin-top: 3em;
        }

        .right .greeting,
        .right .introduction{
            display:none;
        }    
        
        footer{
            margin-bottom: 3em;
        }
    }

    @media (max-width: 992px){
        section {
            font-size: 12px;
            flex-direction: column;
        }

        .left .greeting{
            display:block;
            font-size: 3.5em;
            color: var(--action-color);
        }

        .left .introduction{
            display:block;
            font-size: 2.5em;
            font-weight: 400;
            margin-bottom: .7em;
            color: var(--action-color);
        }

        .right{
            text-align:center;
        }

         .right .greeting,
        .right .introduction{
            display:none;
        }    
        
    }
</style>