<template>
    <section  id="projects" class="container">
        <section>
            <header>
                <p class="projectTitle">
                    Spotify Clone
                </p>
                <p class="projectTecnologies">
                    HTML | CSS | BOOTSTRAP
                </p>
            </header>
        </section>
    </section>
</template>

<script>
export default {
    name: "Projects"
}
</script>

<style scoped>
    section {
        text-align: center;
    }

    .projectTitle{
        font-size: 4em;
        font-weight: bolder;
        color: var(--ice-white);
    }
    .projectTecnologies{
        margin-top: 1em;
        font-size: 1em;
        color: #06A6CF;
    }

    @media (max-width: 767px) {
        .projectTitle{
            font-size: 3em;
        }
    }
</style>