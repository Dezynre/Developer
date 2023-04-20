
# This is my trading strategy that I intend to execute and backtest in 100 Trades on Binance 

# RULES  
# Rule 1. Follow the2 trend
# Rule 2. Never enter a trade without a stop-loss
# Rule 3. Never ever risk more than 2% in a single position
# Rule 4. Use higher probability setups only
# Rule 5. Do not change your trading strategy just yet
# Rule 6. Bargain in each trade

# GUIDING QUOTES
# Quote 1. Be patient, trading opportunities come and go
# Quote 2. The impatient, liquidate everything before the bull run
# Quote 3. You can live well below your means
# Quote 4. You can sacrifice today for a better tommorrow
# Quote 5. Wealth is more often the result of a lifestyle of hard work, perseverance, planning, and, most of all, self-discipline
# Quote 6. Mr. Stupid, why risk everything on one trade? Why not make your life a pursuit of happiness rather than pain?
# Quote 7. Losing traders tend to be disorganized and impatient

import os

# This is a function to predict the total amount of accumulated capital after a certain period of months

# Input: 
# Starting capital, to be passed as an integer
# Investment periods, to be passed as an integer
# Percentage profit reinvested at the end of each investment period, to be passed as an integer
# Percentage assumed win rate, to be passed as an integer
# Number of trades per period, to be passed as an integer
# Risk to Reward ratio, passed in as an array [risk, reward]

# Output:
# Total Accumulated Capital

def computeAccumulatedCapital(startingCapital=500000, investmentPeriods=120, percentageProfitPlowedBackAfterEachPeriod=75, winRate=50, tradesPerPeriod=6, riskRewardRatio=[2,6]):
    totalAccumulatedCapital = startingCapital
    currentCapital = startingCapital
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    for i in range(investmentPeriods):
        expectedProfitPerTrade = (riskRewardRatio[1]/100) * currentCapital
        expectedLossPerTrade = (riskRewardRatio[0]/100) * currentCapital
        capitalGainedDuringThisPeriod = (tradesPerPeriod * (winRate/100)) * expectedProfitPerTrade
        capitalLostDuringThisPeriod = (tradesPerPeriod * (winRate/100)) * expectedLossPerTrade
        grossProfit = capitalGainedDuringThisPeriod - capitalLostDuringThisPeriod
        currentCapital = (percentageProfitPlowedBackAfterEachPeriod / 100) * grossProfit + totalAccumulatedCapital
        income = ((100-percentageProfitPlowedBackAfterEachPeriod) / 100) * grossProfit
        totalAccumulatedCapital = currentCapital
    return "Total Accumulated Capital: " + str(round(totalAccumulatedCapital)) + "\nIncome: " + str(round(income)) + "\nInvestment Period: " + str(round(investmentPeriods/12)) + "years"


startingCapital = int(input("Starting Capital? (An integer): "))
investmentPeriods = int(input("Investment Periods? (An integer): "))
print(computeAccumulatedCapital(startingCapital=startingCapital, investmentPeriods=investmentPeriods))


