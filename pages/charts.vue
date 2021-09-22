<template>
  <div>
    <highstock
      :options="chartOptions"
      :update="['options.title', 'options.series']"
    />
    time: {{ time }}
    <button @click="updateChart">Click Here</button>
  </div>
</template>

<script>
import { data } from "@/constants/series.js";

// const data = [
//   [1318607760000, 421.07, 421.49, 420.7, 421.46],
//   [1318607820000, 421.4601, 421.71, 421.36, 421.69],
//   [1318607880000, 421.69, 421.94, 421.663, 421.94],
//   [1318607940000, 421.94, 422, 421.8241, 422]
// ];

// const data = [1, 2, 3, 4];

export default {
  data() {
    return {
      data: this._.cloneDeep(data),
      time: 1318607940000,
      open: 421.94,
      high: 422,
      low: 421.8241,
      close: 422,
      chartOptions: {
        credits: { enabled: false },
        chart: {
          pinchType: "xy",
          zoomBySingleTouch: true,
          panning: { enabled: true, type: "xy" }
        },
        title: {
          text: "BTC / USD"
        },
        rangeSelector: {
          buttons: [
            {
              type: "minute",
              count: 1,
              text: "1m"
            },
            {
              type: "minute",
              count: 3,
              text: "3m"
            },
            {
              type: "minute",
              count: 5,
              text: "5m"
            },
            {
              type: "minute",
              count: 15,
              text: "15m"
            },
            {
              type: "minute",
              count: 30,
              text: "30m"
            },
            {
              type: "hour",
              count: 1,
              text: "1h"
            },
            {
              type: "hour",
              count: 2,
              text: "2h"
            },
            {
              type: "hour",
              count: 4,
              text: "4h"
            },
            {
              type: "hour",
              count: 6,
              text: "6h"
            },
            {
              type: "hour",
              count: 12,
              text: "12h"
            },
            {
              type: "day",
              count: 1,
              text: "1d"
            }
          ],
          selected: 5,
          inputEnabled: false
        },
        navigator: { enabled: false },
        series: [
          {
            type: "candlestick",
            data,
            tooltip: {
              valueDecimals: 2
            },
            upColor: "#3fbf4a",
            upLineColor: "#3fbf4a",
            color: "#e81010"
            // pointStart: 1631631295000, // need 3 0s on the end from a UNIX timestamp
            // pointInterval: 4000 // The interval between data
          }
        ],
        time: { timezone: "Asia/Singapore" }
      }
    };
  },
  mounted() {
    const _this = this;
    setInterval(function() {
      _this.time += 60000;
      _this.open += 2;
      _this.high += 2;
      _this.low += 2;
      _this.close += 2;
      _this.updateChart([
        _this.time,
        _this.open,
        _this.high,
        _this.low,
        _this.close
      ]);
    }, 5000);
  },
  methods: {
    updateChart(number) {
      this.chartOptions.series = [
        {
          type: "candlestick",
          data: data.concat([number]),
          tooltip: {
            valueDecimals: 2
          },
          upColor: "#3fbf4a",
          upLineColor: "#3fbf4a",
          color: "#e81010"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped></style>
