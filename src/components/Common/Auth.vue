<template>
    <div>
        <q-dialog v-model="dialog" :position="position" style="z-index:15000">
            <q-card>
                <!-- <q-linear-progress indeterminate color="primary" style="position:absolute; top:0px" /> -->
                <q-card-section class="row items-center no-wrap">
                    <div>
                    <div class="pc fs-18  font-regular">Verify your Phone Number</div>
                    <div class="text-grey font-regular">We need your Basic Details to place this order</div>
                    </div>
                </q-card-section>
                <q-separator />
                <q-form  ref="myForm" class="q-gutter-md">
                    <div class="q-px-md q-pt-md">
                        <q-input outlined v-model="name" type="text" class="input-style" label="Your Name" :rules="[ val => val && val.length > 0 || 'Enter your Name']" />
                        <q-input outlined v-model="phone" type="number" hint="Telephone number" class="input-style" label="Enter your Phone Number"  :rules="[ val => val && val.length > 0 || 'Enter your Phone Number']"/>
                    </div>

                <div class="q-pt-xs q-pa-md">
                    <q-btn size="12px" color="primary" @click="onSubmit" style="color:white !important" align="left" class="fs-14 q-py-md font-regular color-white full-width q-my-xs">
                        <div >Send OTP</div>
                    </q-btn>
                </div>
                </q-form>
                <div class="q-px-md q-pb-md">
                    <div class="text-grey font-regular text-center">By Clicking on Send OTP Button you are aggreing with our terms & Conditions and Privacy Policy</div>
                </div>
            </q-card>
        </q-dialog>
        <!--OTP DIALOG-->
        <q-dialog v-model="otpdialog" persistent :position="position">
            <q-card>
                <!-- <q-linear-progress indeterminate color="primary" style="position:absolute; top:0px" /> -->
                <q-card-section class="row items-center q-pb-md">
                    <div>
                        <div class="pc fs-18  font-regular">OTP Sent</div>
                        <div class="text-grey font-regular">We Sent OTP at {{otpSentphoneNumber}}</div>
                    </div>
                    <q-space />
                    <q-btn icon="close" @click="secondDialog = true" flat round dense/>
                </q-card-section>

                <q-separator />

                <q-form  ref="myFormOtp" class="q-gutter-md">
                <div class="q-px-md q-pt-md">
                    <q-input outlined v-model="otpCode" type="tel" class="input-style" label="Enter 6 Digit Otp" :rules="[ val => val && val.length > 0 || 'Enter your otp code']"/>
                </div>
                </q-form>

                <div class="q-pt-xs q-pa-md">
                    <div class="text-red font-regular">{{otpSentErrorMessage}}</div>
                    <q-btn size="12px" color="primary" @click="onSubmitOtpCodeForm" style="color:white !important" align="left" class="fs-14 q-py-md font-regular color-white full-width q-my-xs">
                        <div>Verify Otp</div>
                    </q-btn>
                </div>
            </q-card>
        </q-dialog>
        <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
            <q-card>
                <q-card-section class="row items-center">
                    <div class="text-h6">Alert</div>
                    <p >Are you Sure ? You want to Cancel this Section OTP</p>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="No" color="primary" v-close-popup />
                    <q-btn flat label="Yes" color="primary" v-close-popup @click="otpdialog = false" />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </div>
</template>

<script>

import { ref } from 'vue'
import {mapGetters,mapActions} from 'vuex';
import { useRouter } from 'vue-router';
import masterUserLoginOtpApi from "../../apis/UserLoginOtp";

export default {
    props: ["model"],

    setup (props) {
            const dialog = ref(false)
            const otpdialog = ref(false)
            const position = ref('top');
            const router = useRouter();

            return {
                name: ref(''),
                phone: ref(''),
                otpCode: ref(''),
                dialog,
                otpdialog,
                position,
                secondDialog: ref(false),
                open (pos) {
                    if (!localStorage.getItem("userToken")){
                        position.value = pos,
                            dialog.value = true
                    }else {
                        router.push({ path: '/cart' });
                    }
                }, openProfile (pos) {
                    if (!localStorage.getItem("userToken")){
                        position.value = pos,
                        dialog.value = true
                    }else {
                        router.push({ path: '/profile' });
                    }
                },
                otp (pos) {
                    position.value = pos;
                    dialog.value = false;
                    otpdialog.value = true;
                },
                redirectcart(){
                    router.push({ path: '/cart' });
                }
            }
        },
        data() {
            return {
                otpSentphoneNumber:'',
                otpSentErrorMessage:''
            }
        },
        computed: {
            ...mapGetters("tenantDetailsModules", ["cartListing"]),
        },
        methods: {
            ...mapActions("tenantDetailsModules", ["addUser"]),
            ...mapActions("tenantDetailsModules", ["VeryfiedUsersByOtp"]),
            ...mapActions("tenantDetailsModules", ["getCartItmes"]),

            onSubmit () {
                let vm = this;
                this.$refs.myForm.validate()
                    .then(success => {
                        if (this.name!='' && this.phone!=''){
                            this.addUser({
                                name: this.name,
                                phone: this.phone
                            });
                            this.otpSentphoneNumber=this.phone;
                            this.otp('bottom');
                        }
                    })
                    .catch(err => {
                        alert("Something wrong");
                    })

            },onSubmitOtpCodeForm () {
                let otpVm = this;
                let cartItemList=(this.cartListing)?this.cartListing:'';
                otpVm.$refs.myFormOtp.validate()
                    .then(success => {
                        if (this.otpCode!=''){
                            let phone=this.phone;
                            let phone_otp=this.otpCode;

                            masterUserLoginOtpApi.store({
                                phone:phone,
                                phone_otp:phone_otp,
                                cartItemList:cartItemList,
                            }).then(response => {
                                if (response){
                                    if (response.data.user){
                                        localStorage.setItem('userToken', response.data.token);
                                        localStorage.setItem('growMoreUserId', response.data.user.id);
                                        localStorage.setItem('growMoreUserName', response.data.user.name);
                                        localStorage.setItem('gorwMoreUserPhone', phone);
                                        this.redirectcart();
                                    }else {
                                        this.otpSentErrorMessage='Your opt code is wrong';
                                    }
                                }else {
                                    alert("Something Wrong In api");
                                }
                            });
                        }
                    })
                    .catch(err => {
                        alert("Something wrong");
                    })
            }
        },
}
</script>

<style>

</style>
