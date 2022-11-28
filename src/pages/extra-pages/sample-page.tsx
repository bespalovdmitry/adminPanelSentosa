import {useEffect} from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import ExpandingSubTable from 'sections/tables/react-table/ExpandingSubTable';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchDataTC} from "../../store/reducers/visasReportSlice";
import {ApplicantsDataType} from "../../models/applicantModel";

// ==============================|| REACT TABLE - EXPANDING ||============================== //
export type Row = {
    id: number
    applicantsData:ApplicantsDataType[],
    file:any[],
    fullPrice: number,
    numberOfApplicants:string,
    service: string,
    email: string,
    phone: string,
    visaStatus: string,
    visitPurpose:string,
}

const Expanding = () => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.reducers.visasReportSlice)
    useEffect(() => {
        dispatch(fetchDataTC())
    }, [dispatch])

    let mappedData:Row[] = data.map((d, i) => {
        return {
            id: i,
            appDate: d.appDate,
            applicantsData: d.applicantsData,
            file: d.file,
            fullPrice: d.fullPrice,
            numberOfApplicants: d.numberOfApplicants,
            service: d.service,
            email: d.email,
            phone: d.tel,
            visaStatus: d.visa_status,
            visitPurpose: d.visitPurpose,
            uid: d.uid
        }
    })
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ExpandingSubTable data={mappedData} />
            </Grid>
        </Grid>
    );
};

export default Expanding;
