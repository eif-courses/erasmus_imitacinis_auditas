import React from 'react';
import {Page, Text, Document, StyleSheet, PDFDownloadLink, View, Image, PDFViewer} from '@react-pdf/renderer';

type TemplateData = {
    companyName: string;
    companyPhone: string;
    companyEmail: string;
    receiptNumber: string;
    datePaid: string,
    paymentMethod: string,
    amount: string
};

interface PDFProps {
    data: TemplateData;
}

const styles = StyleSheet.create({
    page: {
        padding: 0,
    },
    certificate: {
    },
    background: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 28,
        fontFamily: 'Helvetica-Bold',
        color: '#4054b2',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Helvetica',
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        marginBottom: 8,
        marginTop: 20,
    },
    sponsorsContainer: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sponsorLogo: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
});


const PDFGenerator: React.FC<PDFProps> = ({data}) => {
    return (
        <div>
            <h1>PDF Generator</h1>
            <PDFDownloadLink document={
                <Document>
                    <Page orientation="landscape" style={styles.page}>
                        <View style={styles.certificate}>
                            <View>
                                <Text style={styles.title}>Certificate of Completion</Text>
                            </View>
                            <View>
                            <Image
                                src="remas.jpg"
                                style={styles.background}/>
                            </View>
                        </View>
                    </Page>
                </Document>
            } fileName="generated.pdf">
                {({blob, url, loading, error}) =>
                    loading ? 'Generating PDF...' : 'Download PDF'
                }
            </PDFDownloadLink>
        </div>
    );
};

export default PDFGenerator;
