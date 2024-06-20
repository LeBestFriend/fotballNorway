import React from 'react'
import "../../styling/eliteserieRad.css"
export default function EliteserieRad({rank, teamName, points, amountOfMatchesPlayed, amountOfVictories, amountOfDraws, amountOfLosses, goalsScored, goalsScoredOn, goalDifferential}) {
  return (
    <div class = "eliteserieRad">
        <div>Rank: {rank}</div>
        <div>Team Name: {teamName}</div>
        <div>Points: {points}</div>
        <div>Matches Played: {amountOfMatchesPlayed}</div>
        <div>Victories: {amountOfVictories}</div>
        <div>Draws: {amountOfDraws}</div>
        <div>Losses: {amountOfLosses}</div>
        <div>Goals Scored: {goalsScored}</div>
        <div>Goals Scored On: {goalsScoredOn}</div>
        <div>Goal Differential: {goalDifferential}</div>
    </div>
  )
}
