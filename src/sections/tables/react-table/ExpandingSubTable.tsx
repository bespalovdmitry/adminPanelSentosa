import { useCallback, useMemo, Fragment } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Chip, Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useExpanded, useTable } from 'react-table';

// project import
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';


// assets
import {DeleteOutlined, DownOutlined, RightOutlined} from '@ant-design/icons';
import {Row} from "../../../pages/extra-pages/sample-page";
import {ApplicantsDataType} from "../../../models/applicantModel";

const avatarImage = require.context('assets/images/users', true);

export type visaStatus =
    | 'отложенная подача'
    | 'в обработке'
    | 'ожидает оплаты'
    | 'оплачено'
    | 'одобрено'
    | 'отказ'
    | 'плохое фото'
    | 'заполняется'

// ==============================|| REACT SUB TABLE ||============================== //

function ReactSubTable({ columns, data, loading }: any) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });

    if (loading) {
        return (
            <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {[0, 1, 2].map((item: number) => (
                        <TableRow key={item}>
                            {[0, 1, 2, 3, 4, 5].map((col: number) => (
                                <TableCell key={col}>
                                    <Skeleton animation="wave" />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }

    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <TableCell {...column.getHeaderProps([{ className: column.className }])}>{column.render('Header')}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map((cell: any) => (
                                <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

// ==============================|| SUB ROW - ASYNC DATA ||============================== //

function SubRowAsync({ applicantData }: { applicantData: ApplicantsDataType[] }) {
    const theme = useTheme();

    let detailedRawData = applicantData.map((m: ApplicantsDataType, i: number) => {
        return {
            id: i,
            mainApplicantIs: m.mainApplicantIs,
            male: m.male,
            birthDate: m.birthDate,
            citizenship: m.citizenship,
            fullName: m.fullName,
            flightInDate: m.flightInDate,
            flightInNumber: m.flightInNumber,
            flightOutDate: m.flightOutDate,
            flightOutNumber: m.flightOutNumber,
            passportData: m.passportData,
            passportExpire: m.passportExpire,
            passportIssuedBy: m.passportIssuedBy,
            passportNumber: m.passportNumber,
        }
    })
    const columns = useMemo(
        () => [
            {
                Header: 'Avatar',
                accessor: 'avatar',
                className: 'cell-center',
                Cell: ({ value }: any) => <Avatar alt="Avatar 1" size="sm" src={avatarImage(`./avatar-${value}.png`)} />
            },
            {
                Header: 'Name',
                accessor: 'fatherName'
            },
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Role',
                accessor: 'role'
            },
            {
                Header: 'Contact',
                accessor: 'contact',
                className: 'cell-right'
            },
            {
                Header: 'Country',
                accessor: 'country'
            }
        ],
        []
    );

    const backColor = alpha(theme.palette.primary.lighter, 0.1);

    return (
        <TableRow sx={{ bgcolor: backColor, '&:hover': { bgcolor: `${backColor} !important` } }}>
            <TableCell colSpan={8} sx={{ p: 2.5 }}>
                <MainCard content={false} sx={{ ml: { xs: 2.5, sm: 5, md: 6, lg: 10, xl: 12 } }}>
                    <ReactSubTable columns={columns} data={detailedRawData} />
                </MainCard>
            </TableCell>
        </TableRow>
    );
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns: userColumns, data, renderRowSubComponent }: any) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, visibleColumns } = useTable(
        {
            columns: userColumns,
            data
        },
        useExpanded
    );

    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <TableCell {...column.getHeaderProps([{ className: column.className }])}>{column.render('Header')}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map((row: any, i: number) => {
                    prepareRow(row);
                    const rowProps = row.getRowProps();

                    return (
                        <Fragment key={i}>
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cell: any) => (
                                    <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                                ))}
                            </TableRow>
                            {row.isExpanded && renderRowSubComponent({ row, rowProps, visibleColumns })}
                        </Fragment>
                    );
                })}
            </TableBody>
        </Table>
    );
}

// ==============================|| REACT TABLE - EXPANDING SUB TABLE ||============================== //

const ExpandingSubTable = ({ data }: { data: Row[] }) => {
    const columns = useMemo(
        () => [
            {
                Header: () => null,
                id: 'expander',
                className: 'cell-center',
                Cell: ({ row }: any) => {
                    const collapseIcon = row.isExpanded ? <DownOutlined /> : <RightOutlined />;
                    return (
                        <Box sx={{ fontSize: '0.75rem', color: 'text.secondary' }} {...row.getToggleRowExpandedProps()}>
                            {collapseIcon}
                        </Box>
                    );
                },
                SubCell: () => null
            },
            {
                Header: 'ID',
                accessor: 'uid'
            },
            {
                Header: 'Date',
                accessor: 'appDate'
            },
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Tel',
                accessor: 'phone',
            },
            {
                Header: 'Applicants',
                accessor: 'numberOfApplicants',
            },
            {
                Header: 'Full price',
                accessor: 'fullPrice',
            },
            {
                Header: 'Service',
                accessor: 'service',
            },
            {
                Header: 'Visas',
                accessor: 'file',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ( value : visaStatus) => {
                    switch (value) {
                        case 'заполняется':
                            return <Chip color='secondary' label="заполняется" size="small" variant="light" />;
                        case 'оплачено':
                            return <Chip color="success" label="оплачено" size="small" variant="light" />;
                        case 'одобрено':
                        default:
                            return <Chip color="info" label="одобрено" size="small" variant="light" />;
                    }
                }
            },
            {
                Header: () => null,
                id: 'delete',
                className: 'cell-center',
                Cell: ({ row }: any) => {
                    const deleteIcon = <DeleteOutlined/>;
                    return (
                        <Box sx={{ fontSize: '0.75rem', color: 'red' }} {...row.getToggleRowExpandedProps()}>
                            {deleteIcon}
                        </Box>
                    );
                },
                SubCell: () => null
            },
        ],
        []
    );

    const renderRowSubComponent = useCallback(() => <SubRowAsync applicantData={data[1].applicantsData}/>, []);

    return (
        <MainCard content={false} title="Expanding Sub Table">
            <ScrollX>
                <ReactTable columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
            </ScrollX>
        </MainCard>
    );
};

export default ExpandingSubTable;
