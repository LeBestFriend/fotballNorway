import React from 'react'
import EliteserieRad from "./EliteserieRad"


export default function EliteserieTable({ prevStandings, currentStandings }) {
    if(!Array.isArray(currentStandings)){
        return <div>

        </div>
    }else return (
        <div>
            <div className='eliteserierad'>YOOOOOOOOOOOOOOO</div>
            {currentStandings.map(standingRow => {
                let rank = standingRow.rank;
                let teamName = standingRow.team.name;
                let points = standingRow.points;
                let amountOfMatchesPlayed = standingRow.all.played;
                let amountOfVictories = standingRow.all.win;
                let amountOfDraws = standingRow.all.draw;
                let amountOfLosses = standingRow.all.lose;
                let goalsScored = standingRow.all.goals.for;
                let goalsScoredOn = standingRow.all.goals.on;
                let goalDifferential = standingRow.goalsDiff;

                return (
                    <EliteserieRad
                        rank={rank}
                        teamName={teamName}
                        points={points}
                        amountOfMatchesPlayed={amountOfMatchesPlayed}
                        amountOfVictories={amountOfVictories}
                        amountOfDraws={amountOfDraws}
                        amountOfLosses={amountOfLosses}
                        goalsScored={goalsScored}
                        goalsScoredOn={goalsScoredOn}
                        goalDifferential={goalDifferential}
                    />
                );
            })}
        </div>
    );
}