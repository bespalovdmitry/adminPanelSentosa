import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dayjs} from "dayjs";
import {Moment} from 'moment'

export const formSlice = createSlice({
    name: 'visaForm',
    initialState: {
        id: '',
        applicantCount: 1,
        service: '',
        price: 0,
        visit: '',
        email: '',
        tel: null,
        applicants: [{
            name: '',
            gender: '',
            citizenship: '',
            maritalStatus: '',
            education: '',
            position: '',
            income: null,
            religion: '',
            passportNumber: '',
            passportAuthority: '',
            dateIssue: null,
            dateExpiry: null,
            dateBirth: null,
            homeAddress: '',
            city: '',
            postCode: null,
            country: '',
            arrivalDate: null,
            departureDate: null,
            flightTo: '',
            flightOut: '',
            departure: '',
            lived: '',
            livedCount: 0,
            convicted: '',
            livedCountryApplicant: [
                {livedCountry: '', livedFrom: null, livedTo: null, livedCity: '', livedAddress: ''}
            ]
        }],
    } as InitialState,
    reducers: {
        setOrderId(state, action: PayloadAction<string>) {
            state.id = action.payload
        },
        setApplicantCount(state, action: PayloadAction<number>) {
            state.applicantCount = action.payload
            state.applicants = []
            for (let i = 0; i < action.payload; i++) {
                state.applicants[i] = {
                    name: '',
                    gender: '',
                    citizenship: '',
                    maritalStatus: '',
                    education: '',
                    position: '',
                    income: null,
                    religion: '',
                    passportNumber: '',
                    passportAuthority: '',
                    dateIssue: null,
                    dateExpiry: null,
                    dateBirth: null,
                    homeAddress: '',
                    city: '',
                    postCode: null,
                    country: '',
                    arrivalDate: null,
                    departureDate: null,
                    flightTo: '',
                    flightOut: '',
                    departure: '',
                    lived: '',
                    livedCount: 0,
                    convicted: '',
                    livedCountryApplicant: [
                        {livedCountry: '', livedFrom: null, livedTo: null, livedCity: '', livedAddress: ''}

                    ]
                }
            }
        },
        setService(state, action: PayloadAction<string>) {
            state.service = action.payload
        },
        setPrice(state, action: PayloadAction<number>) {
            state.price = action.payload
        },
        setVisit(state, action: PayloadAction<string>) {
            state.visit = action.payload
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload
        },
        setTel(state, action: PayloadAction<number>) {
            state.tel = action.payload
        },
        setName(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].name = action.payload[1]
        },
        setGender(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].gender = action.payload[1]
        },
        setCitizenship(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].citizenship = action.payload[1]
        },
        setMaritalStatus(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].maritalStatus = action.payload[1]
        },
        setEducation(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].education = action.payload[1]
        },
        setPosition(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].position = action.payload[1]
        },
        setIncome(state, action: PayloadAction<Array<number>>) {
            state.applicants[action.payload[0]].income = action.payload[1]
        },
        setReligion(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].religion = action.payload[1]
        },
        setPassportNumber(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].passportNumber = action.payload[1]
        },
        setPassportAuthority(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].passportAuthority = action.payload[1]
        },
        setDateIssue(state, action: PayloadAction<Array<any>>) {
            state.applicants[Number(action.payload[0])].dateIssue = action.payload[1]
        },
        setDateExpiry(state, action: PayloadAction<Array<any>>) {
            state.applicants[Number(action.payload[0])].dateExpiry = action.payload[1]
        },
        setDateBirth(state, action: PayloadAction<Array<any>>) {
            state.applicants[Number(action.payload[0])].dateBirth = action.payload[1]
        },
        setAddress(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].homeAddress = action.payload[1]
        },
        setCity(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].city = action.payload[1]
        },
        setPostCode(state, action: PayloadAction<Array<number>>) {
            state.applicants[action.payload[0]].postCode = action.payload[1]
        },
        setCountry(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].country = action.payload[1]
        },
        setArrivalDate(state, action: PayloadAction<Array<any>>) {
            state.applicants[Number(action.payload[0])].arrivalDate = action.payload[1]
        },
        setDepartureDate(state, action: PayloadAction<Array<any>>) {
            state.applicants[Number(action.payload[0])].departureDate = action.payload[1]
        },
        setFlightTo(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].flightTo = action.payload[1]
        },
        setFlightOut(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].flightOut = action.payload[1]
        },
        setDeparture(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].departure = action.payload[1]
        },
        setLived(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].lived = action.payload[1]
        },
        setLivedCount(state, action: PayloadAction<Array<number>>) {
            state.applicants[action.payload[0]].livedCount = action.payload[1]
        },
        setConvicted(state, action: PayloadAction<Array<string>>) {
            state.applicants[Number(action.payload[0])].convicted = action.payload[1]
        },
    }
})

export default formSlice.reducer

//type
export type Applicant = {
    name: string
    gender: string
    citizenship: string
    maritalStatus: string
    education: string
    position: string
    income: number | null
    religion: string
    passportNumber: string
    passportAuthority: string
    dateIssue: Moment | null
    dateExpiry: Dayjs | null
    dateBirth: Dayjs | null
    homeAddress: string
    city: string
    postCode: number | null
    country: string
    arrivalDate: Dayjs | null
    departureDate: Dayjs | null
    flightTo: string
    flightOut: string
    departure: string
    lived: string
    livedCount: number
    convicted: string
    livedCountryApplicant: [
        { livedCountry: string, livedFrom: Dayjs | null, livedTo: Dayjs | null, livedCity: string, livedAddress: string }
    ]
}

export type InitialState = {
    id: string
    applicantCount: number
    service: string
    price: number
    visit: string
    email: string
    tel: number | null
    applicants: Applicant[]
}