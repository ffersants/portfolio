<template>
    <section data-aos="zoom-in" >
        <div class="left">
                <transition>
            <div class="holds-picture">
                    <img src="../assets/ey.jpg" alt="">
            </div>
                </transition>
 
            <div class="bio"> 
                <p class="name">Fernando Santos Ferreira</p>

                <p class="description">
                    <pre class="text-center">{{languageSelected === 'PT' ? pt.bioDescription : en.bioDescription }}</pre>
                </p>
            </div>

            <div class="social-links-div">
                <a class="social-link" href="https://www.linkedin.com/in/fernando-ferreira-52319918b/">
                    <img class="social-link-icon" src="../assets/linkedin-icon.png" alt="Link para o perfil no LinkedIn">
                </a>
                <a class="social-link  github" href="https://github.com/ffersants">
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

        <div>
            <font-awesome-icon class="down" rotation="180" size="4x" icon="sort-up" />
        </div>

    </footer>

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
        margin-top: 3em;
    }

    footer div {
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
        section {
            font-size: 11px;
            flex-direction: column;
        }
        .right{
            text-align:center;
            margin-top: 1rem;
        }
        .left .holds-picture img{
            width: 120px;
        }
    }

    @media (max-width: 992px){
        section {
            font-size: 12px;
            flex-direction: column;
        }
        .right{
            text-align:center;
        }
    }
</style>