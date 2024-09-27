"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AlertDialog from '@/app/component/AlertDialog';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard({ data, recent }) {
    console.log(recent)
    return (
        <Card sx={{ width: "25%" }} className=' m-8 bg-blue-100 w-10/12 md:w-1/3'>
            {
                data && <>

                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {data.name}
                            {data.data}
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {data?.totalUser}
                            {data.sirName}
                            
                            
                            
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {recent?.[recent?.length - 1]?.name}
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {recent?.[recent?.length - 1]?.sirName}
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {recent?.[recent?.length - 1]?.location}
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {data.location}
                        </Typography>
                    </CardContent>
                    {
                        !data.delete &&
                        <CardActions>
                            <AlertDialog id={data?.id} />
                        </CardActions>
                    }
                </>
            }
        </Card>
    );
}
