"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ time: "2024-06-28 00:00", tracked: 22, untracked: 150 },
	{ time: "2024-06-28 00:30", tracked: 22, untracked: 150 },
	{ time: "2024-06-28 01:00", tracked: 9, untracked: 180 },
	{ time: "2024-06-28 01:30", tracked: 9, untracked: 180 },
	{ time: "2024-06-28 02:00", tracked: 17, untracked: 120 },
	{ time: "2024-06-28 02:30", tracked: 17, untracked: 120 },
	{ time: "2024-06-28 03:00", tracked: 22, untracked: 260 },
	{ time: "2024-06-28 03:30", tracked: 22, untracked: 260 },
	{ time: "2024-06-28 04:00", tracked: 33, untracked: 290 },
	{ time: "2024-06-28 04:30", tracked: 33, untracked: 290 },
	{ time: "2024-06-28 05:00", tracked: 31, untracked: 340 },
	{ time: "2024-06-28 05:30", tracked: 31, untracked: 340 },
	{ time: "2024-06-28 06:00", tracked: 25, untracked: 180 },
	{ time: "2024-06-28 06:30", tracked: 25, untracked: 180 },
	{ time: "2024-06-28 07:00", tracked: 49, untracked: 320 },
	{ time: "2024-06-28 07:30", tracked: 49, untracked: 320 },
	{ time: "2024-06-28 08:00", tracked: 5, untracked: 110 },
	{ time: "2024-06-28 08:30", tracked: 5, untracked: 110 },
	{ time: "2024-06-28 09:00", tracked: 21, untracked: 190 },
	{ time: "2024-06-28 09:30", tracked: 21, untracked: 190 },
	{ time: "2024-06-28 10:00", tracked: 37, untracked: 350 },
	{ time: "2024-06-28 10:30", tracked: 37, untracked: 350 },
	{ time: "2024-06-28 11:00", tracked: 22, untracked: 210 },
	{ time: "2024-06-28 11:30", tracked: 22, untracked: 210 },
	{ time: "2024-06-28 12:00", tracked: 32, untracked: 380 },
	{ time: "2024-06-28 12:30", tracked: 32, untracked: 380 },
	{ time: "2024-06-28 13:00", tracked: 17, untracked: 220 },
	{ time: "2024-06-28 13:30", tracked: 17, untracked: 220 },
	{ time: "2024-06-28 14:00", tracked: 10, untracked: 170 },
	{ time: "2024-06-28 14:30", tracked: 10, untracked: 170 },
	{ time: "2024-06-28 15:00", tracked: 18, untracked: 190 },
	{ time: "2024-06-28 15:30", tracked: 18, untracked: 190 },
	{ time: "2024-06-28 16:00", tracked: 46, untracked: 360 },
	{ time: "2024-06-28 16:30", tracked: 46, untracked: 360 },
	{ time: "2024-06-28 17:00", tracked: 34, untracked: 410 },
	{ time: "2024-06-28 17:30", tracked: 34, untracked: 410 },
	{ time: "2024-06-28 18:00", tracked: 23, untracked: 180 },
	{ time: "2024-06-28 18:30", tracked: 23, untracked: 180 },
	{ time: "2024-06-28 19:00", tracked: 8, untracked: 150 },
	{ time: "2024-06-28 19:30", tracked: 8, untracked: 150 },
	{ time: "2024-06-28 20:00", tracked: 17, untracked: 200 },
	{ time: "2024-06-28 20:30", tracked: 17, untracked: 200 },
	{ time: "2024-06-28 21:00", tracked: 24, untracked: 170 },
	{ time: "2024-06-28 21:30", tracked: 24, untracked: 170 },
	{ time: "2024-06-28 22:00", tracked: 18, untracked: 230 },
	{ time: "2024-06-28 22:30", tracked: 18, untracked: 230 },
	{ time: "2024-06-28 23:00", tracked: 37, untracked: 290 },
	{ time: "2024-06-28 23:30", tracked: 37, untracked: 290 },
	{ time: "2024-06-29 00:00", tracked: 23, untracked: 310 },
	{ time: "2024-06-29 00:30", tracked: 23, untracked: 310 },
	{ time: "2024-06-29 01:00", tracked: 27, untracked: 190 },
	{ time: "2024-06-29 01:30", tracked: 27, untracked: 190 },
	{ time: "2024-06-29 02:00", tracked: 35, untracked: 420 },
	{ time: "2024-06-29 02:30", tracked: 35, untracked: 420 },
	{ time: "2024-06-29 03:00", tracked: 41, untracked: 390 },
	{ time: "2024-06-29 03:30", tracked: 41, untracked: 390 },
	{ time: "2024-06-29 04:00", tracked: 48, untracked: 520 },
	{ time: "2024-06-29 04:30", tracked: 48, untracked: 520 },
	{ time: "2024-06-29 05:00", tracked: 38, untracked: 300 },
	{ time: "2024-06-29 05:30", tracked: 38, untracked: 300 },
	{ time: "2024-06-29 06:00", tracked: 19, untracked: 210 },
	{ time: "2024-06-29 06:30", tracked: 19, untracked: 210 },
	{ time: "2024-06-29 07:00", tracked: 27, untracked: 180 },
	{ time: "2024-06-29 07:30", tracked: 27, untracked: 180 },
	{ time: "2024-06-29 08:00", tracked: 23, untracked: 330 },
	{ time: "2024-06-29 08:30", tracked: 23, untracked: 330 },
	{ time: "2024-06-29 09:00", tracked: 35, untracked: 270 },
	{ time: "2024-06-29 09:30", tracked: 35, untracked: 270 },
	{ time: "2024-06-29 10:00", tracked: 17, untracked: 240 },
	{ time: "2024-06-29 10:30", tracked: 17, untracked: 240 },
	{ time: "2024-06-29 11:00", tracked: 17, untracked: 160 },
	{ time: "2024-06-29 11:30", tracked: 17, untracked: 160 },
	{ time: "2024-06-29 12:00", tracked: 48, untracked: 490 },
	{ time: "2024-06-29 12:30", tracked: 48, untracked: 490 },
	{ time: "2024-06-29 13:00", tracked: 43, untracked: 380 },
	{ time: "2024-06-29 13:30", tracked: 43, untracked: 380 },
	{ time: "2024-06-29 14:00", tracked: 38, untracked: 400 },
	{ time: "2024-06-29 14:30", tracked: 38, untracked: 400 },
	{ time: "2024-06-29 15:00", tracked: 49, untracked: 420 },
	{ time: "2024-06-29 15:30", tracked: 49, untracked: 420 },
	{ time: "2024-06-29 16:00", tracked: 35, untracked: 350 },
	{ time: "2024-06-29 16:30", tracked: 35, untracked: 350 },
	{ time: "2024-06-29 17:00", tracked: 25, untracked: 180 },
	{ time: "2024-06-29 17:30", tracked: 25, untracked: 180 },
	{ time: "2024-06-29 18:00", tracked: 17, untracked: 230 },
	{ time: "2024-06-29 18:30", tracked: 17, untracked: 230 },
	{ time: "2024-06-29 19:00", tracked: 8, untracked: 140 },
	{ time: "2024-06-29 19:30", tracked: 8, untracked: 140 },
	{ time: "2024-06-29 20:00", tracked: 8, untracked: 120 },
	{ time: "2024-06-29 20:30", tracked: 8, untracked: 120 },
	{ time: "2024-06-29 21:00", tracked: 22, untracked: 290 },
	{ time: "2024-06-29 21:30", tracked: 22, untracked: 290 },
	{ time: "2024-06-29 22:00", tracked: 24, untracked: 220 },
	{ time: "2024-06-29 22:30", tracked: 24, untracked: 220 },
	{ time: "2024-06-29 23:00", tracked: 21, untracked: 250 },
	{ time: "2024-06-29 23:30", tracked: 21, untracked: 250 },
	{ time: "2024-06-30 00:00", tracked: 18, untracked: 200 },
	{ time: "2024-06-30 00:30", tracked: 18, untracked: 200 },
	{ time: "2024-06-30 01:00", tracked: 40, untracked: 410 },
	{ time: "2024-06-30 01:30", tracked: 40, untracked: 410 },
	{ time: "2024-06-30 02:00", tracked: 13, untracked: 160 },
	{ time: "2024-06-30 02:30", tracked: 13, untracked: 160 },
	{ time: "2024-06-30 03:00", tracked: 49, untracked: 380 },
	{ time: "2024-06-30 03:30", tracked: 49, untracked: 380 },
	{ time: "2024-06-30 04:00", tracked: 8, untracked: 140 },
	{ time: "2024-06-30 04:30", tracked: 8, untracked: 140 },
	{ time: "2024-06-30 05:00", tracked: 24, untracked: 250 },
	{ time: "2024-06-30 05:30", tracked: 24, untracked: 250 },
	{ time: "2024-06-30 06:00", tracked: 33, untracked: 370 },
	{ time: "2024-06-30 06:30", tracked: 33, untracked: 370 },
	{ time: "2024-06-30 07:00", tracked: 35, untracked: 320 },
	{ time: "2024-06-30 07:30", tracked: 35, untracked: 320 },
];

const chartConfig = {
	untracked: {
		label: "Untracked",
		color: "var(--chart-1)",
	},
	tracked: {
		label: "Tracked",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ChartAreaInteractive() {
	const filteredData = chartData.filter((item) => {
		const date = new Date(item.time);
		const referenceDate = new Date("2024-06-30");
		const startDate = new Date(referenceDate);
		startDate.setDate(startDate.getDate() - 3);
		return date >= startDate;
	});

	return (
		<Card className="@container/card h-full">
			<CardHeader>
				<CardTitle>Players Online</CardTitle>
				<CardDescription>
					<span className="hidden @[540px]/card:block">
						Data for the last 3 days
					</span>
					<span className="@[540px]/card:hidden">Last 3 days</span>
				</CardDescription>
			</CardHeader>
			<CardContent className="px-2 py-4 sm:px-6 h-full">
				<ChartContainer config={chartConfig} className="h-full aspect-auto">
					<BarChart
						accessibilityLayer
						data={filteredData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis dataKey="time" hide={true} />
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									indicator="line"
									labelFormatter={(value) => {
										return new Date(value).toLocaleString("en-US", {
											dateStyle: "short",
											timeStyle: "short",
										});
									}}
								/>
							}
						/>
						<Bar
							dataKey="untracked"
							fill="var(--color-untracked)"
							stackId="a"
							radius={[2, 2, 4, 4]}
						/>
						<Bar
							dataKey="tracked"
							fill="var(--color-tracked)"
							stackId="a"
							radius={[4, 4, 2, 2]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
