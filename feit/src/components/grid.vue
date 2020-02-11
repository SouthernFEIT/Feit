<!-- Grid -->
<template>
    <v-container>
    <v-row>
        <v-col class="mb-12 m" cols="12">
        <h3 class="mb-3" >Our Objectives</h3>
        <v-row
            align="start"
            justify="space-between"
            class="lighten-5 text-left"
            style="height: 300px;"
        >
            <v-card
                v-for="n in 3"
                :key="n"
                class="ma-3 pa-6"
                outlined
                tile
            >
            <v-icon class="mb-3" large color="green darken-2">mdi-domain</v-icon>
            <h4 class="mb-3">Opportunities</h4>
            <p>
                Though the gravity still dragged at
                
                <br> him, his muscles were making 
                <br>great efforts to adjust. After the 
                <br>daily classes he no longer 
                <br>collapsed immediately into bed. 
                <br>Only the nightmares got worse.
            </p>
            </v-card>
        </v-row>
        </v-col>
        <!-- <v-col cols="12">
        <v-row justify="center">
            <v-col
            cols="6"
            md="2"
            >
            <v-select
                v-model="alignment"
                :items="alignmentsAvailable"
                label="Align"
            ></v-select>
            </v-col>

            <v-col
            cols="6"
            md="2"
            >
            <v-select
                v-model="justify"
                :items="justifyAvailable"
                label="Justify"
            ></v-select>
            </v-col>
        </v-row>
        </v-col> -->
    </v-row>
    </v-container>

        <!-- <v-col 
            class="mb-5"
            cols="12"
        >
            <h3>Our Objectives</h3>
            <v-row justify="center">
                <p class="mx-12">Opportunities</p>
                <p class="mx-12">Idea</p>
                <p class="mx-12">Skills</p>
            </v-row>

        </v-col> -->
</template>            