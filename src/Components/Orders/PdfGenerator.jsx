import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Canvas,
  Font,
  Image,
  Line,
  Svg,
  PDFViewer,
} from "@react-pdf/renderer";
const PdfGenerator = () => {
  const styles = StyleSheet.create({
    main: {
      fontSize: 6,
      backgroundColor: "#fff",
      lineHeight: 1.4,
    },
    bg_black: {
      backgroundColor: "#000",
    },
    text_white: {
      color: "#fff",
    },
    header: {
      color: "#fff",
      backgroundColor: "#000",
      textAlign: "center",
      fontSize: 11,
    },
  });
  return (
    <PDFViewer height={"800vh"} width={"100%"}>
      <Document>
        <Page size="A7" style={styles.main}>
          <View style={[styles.header, { paddingTop: "10px" }]}>
            <Text style={{ fontSize: 8, padding: 2 }}>ORACLE GloriaFood</Text>
            <Text>DQUBEX order ID #83</Text>

            {/* <View
              style={[styles.header, { paddingTop: "10px", border: "none" }]}
            >
            </View>
            <View style={[styles.header, { border: "none" }]}>
            </View> */}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 5px",
            }}
          >
            <View>
              <Text>New accepted order</Text>
              <Text>Total</Text>
              <Text>PICKUP</Text>
              <Text>27 minutes</Text>
            </View>
            <View>
              <Text>$38.39</Text>
              <Text>CARD AT PICKUP COUNTER</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfGenerator;
