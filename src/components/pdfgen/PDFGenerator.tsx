import React from 'react';
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        position: 'absolute',
        top: '58%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        color: '#4054b2',
        textAlign: 'center',
    },
    date: {
        position: 'absolute',
        top: '77%',
        left: '41%',
        transform: 'translate(-50%, -50%)',
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        color: '#4054b2',
        textAlign: 'center',
    },
    signature: {
        position: 'absolute',
        top: '72%',
        left: '81%',
        transform: 'translate(-50%, -50%)',
        width: '80px',
        height: '80px',
    },
});

const OverlayCertificate = () => {
    return (
        <PDFViewer width="1024px" height="768px">

            <Document>
                <Page orientation="landscape" style={styles.page}>
                    <View style={styles.container}>
                        <Image src="https://static.vecteezy.com/system/resources/previews/002/607/705/original/blue-and-gold-certificate-of-achievement-template-set-background-with-gold-badge-and-border-award-diploma-design-blank-illustration-eps10-free-vector.jpg" style={styles.image} />
                        <Text style={styles.text}>Marius Gžegoževskis</Text>
                        <Text style={styles.date}>2023-08-04</Text>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jon_Kirsch%27s_Signature.png/1280px-Jon_Kirsch%27s_Signature.png" style={styles.signature} />

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

export default OverlayCertificate;
