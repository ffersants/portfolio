<template>
    <header class="header">
        <nav>
            <ul>
                <li>
                    <a href="#info">Info</a>
                </li>

                <li>
                    |
                </li>

                <li>
                    <a href="#projects">Projetos</a>
                </li>

                <li>
                    |
                </li>

                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </nav>

        <div>

        </div>
    </header>
</template>

<script>

export default{
    data(){
        return{
            
        }
    },
    computed:{
        
    }
}
</script>

<style scoped>
    .header{
        border: 1px solid red;
        display: flex;
    }

    .header li{
        margin: 0 1em;
    }

    .header a{
        font-size: 1.2em;
        font-weight: 400;
        letter-spacing: .1em;
    }

    .header a:hover{
        color: var( --action-color);
    }
    .active-one{
        color: var(--action-color);
    }
</style>