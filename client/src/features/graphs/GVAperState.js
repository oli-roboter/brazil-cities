import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NumberFormat from "react-number-format";
import { getGVAData } from "./redux-tools/graph-actions";
import { ResponsiveBar } from "@nivo/bar";

const mapStateToProps = state => {
  return {
    gotData: state.graphStore.gotData,
    data: state.graphStore.data
  };
};

function GVAperState({ gotData, data, getGVAData }) {
  useEffect(() => {
    getGVAData();
  }, []);

  // const keys = gotData ? data.map(d => d.STATE) : [];
  // console.log(keys);
  console.log(data);
  return (
    <div>
      {!gotData ? (
        <p>Nothing to show</p>
      ) : (
        <div style={{ height: "600px", width: "1000px", margin: "100px" }}>
          {/* <pre>{JSON.stringify(data.result, null, 2)}</pre> */}
          <ResponsiveBar
            data={data}
            keys={["farming", "industry", "public", "services"]}
            indexBy="STATE"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.35}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: "industry"
                },
                id: "dots"
              },
              {
                match: {
                  id: "public"
                },
                id: "lines"
              }
            ]}
            borderColor={{ from: "color", modifiers: [["darker", "0.2"]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "country",
              legendPosition: "middle",
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "food",
              legendPosition: "middle",
              legendOffset: -40
            }}
            enableLabel={false}
            labelSkipWidth={7}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", "1.3"]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
            isInteractive={false}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      )}
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getGVAData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(GVAperState);
