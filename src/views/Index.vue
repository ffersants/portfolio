<template>
    <section>
        <div class="left">
                <transition>
            <div class="holds-picture">
                    <img src="../assets/ey.jpg" alt="">
            </div>
                </transition>
 
            <div class="bio"> 
                <p class="name">Fernando Santos Ferreira</p>

                <p class="description">Um carinha do suporte <br>
                aspirante a desenvolvedor</p>
            </div>
        </div>

        <div class="right">
            <p class="greeting">Olá,</p>
            <p class="introduction">eu sou o Fernando!</p>

            <p class="description">
                Cursando Análise e Desnvolvimento de Sistemas,
                na Universidade Católica de Brasília, e preparando-se
                para trabalhar com desenvolvimento de aplicações web.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "Index"
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