<template>
    <header class="header">
        <nav>
            <ul>
                <li v-for="link of navLinks" :key="link" @click="switchActiveLink">
                    <a :class="link.active && 'active-link'" :id="link"  :href="link.href">
                        {{link.text}}
                    </a>
                </li> 
                <span :style="underlineStyle">
                </span>            
            </ul>
        </nav>

        <div>

        </div>
    </header>
</template>

<script>

export default{
    name: 'Header',
    data(){
        return{
            navLinks: [
                {
                    text: 'Info',
                    href: '#info',
                    active: true
                },
                {
                    text: 'Projetos',
                    href: '#projects',
                    active: false
                },
                {
                    text: 'Contato',
                    href: '#contact',
                    active: false
                }
            ],
            underlineWidth: null,
            underlineLeft: null,
            underlineRight: null
        }
    },
    methods: {
        switchActiveLink({target}){
            const {width, left, right} = target.getBoundingClientRect()
            
            console.log(target.getBoundingClientRect())

            this.underlineWidth = width + 'px';
            this.underlineLeft = left + 'px';
            this.underlineRight = right + 'px';

            this.navLinks.map(link => {
                    if(link.text === target.innerText){
                        link.active = true
                    } else{
                        link.active = false
                    }
                }
            )
        }
    },
    computed: {
        underlineStyle(){
            return{
                border: '2px solid var(--action-color)',
                display: 'flex',
                position: 'fixed',
                width: this.underlineWidth || '40.921875px',
                left: this.underlineLeft || '48px',
                right: this.underlineRight || '88.921875px',
                transition: 'all .5s',
                borderRadius: '1rem'
            }   
        }
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        display: flex;
    }

    .header li{
        margin: 0 1em;
    }

    .header a{
        font-size: 1.2em;
        font-weight: 400;
        letter-spacing: .1em;
        transition: color .3s
    }

    .header a:hover{
        color: var( --action-color);
    }
    .active-one{
        color: var(--action-color);
    }

    .active-link{
        color: var(--action-color);
    }

    
</style>