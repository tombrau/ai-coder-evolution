"""Draws chart.png: Sage's 2025 curve vs METR measurements vs three projections. Run from this folder."""
import json, math
from datetime import date, timedelta
import matplotlib; matplotlib.use("Agg")
import matplotlib.pyplot as plt, matplotlib.dates as md
L=lambda n: json.load(open(f"data/{n}.json"))["rows"]
metr,sage,levels,scen=L("metr_horizons"),L("sage_model"),L("sage_levels"),L("scenarios")
d=lambda s: date.fromisoformat(s)
fig,ax=plt.subplots(figsize=(11,6),dpi=130)
ax.set_yscale("log"); ax.set_ylim(0.3,20000); ax.set_xlim(date(2025,1,1),date(2031,1,1))
for l in levels:
    ax.axhline(l["horizon_h"],ls=":",c="#999",lw=1)
    ax.text(date(2031,1,10),l["horizon_h"],l["level"].replace(" programmer",""),va="center",fontsize=8,color="#666")
ax.plot([d(r["date"]) for r in sage],[r["horizon_h"] for r in sage],"--",c="#888",lw=2,label="Sage 2025 model")
b=max(metr,key=lambda r:r["horizon_h"]); t0=d(b["date"])
for s,c in zip(scen,["#d97757","#6a9bcc","#788c5d"]):
    xs=[t0+timedelta(days=i) for i in range(0,(date(2031,1,1)-t0).days,15)]
    ys=[b["horizon_h"]*2**((x-t0).days/s["doubling_days"]) for x in xs]
    pts=[(x,y) for x,y in zip(xs,ys) if y<=20000]
    ax.plot(*zip(*pts),c=c,lw=1.5,label=f'{s["scenario"]}: {s["why"]}')
ax.scatter([d(r["date"]) for r in metr],[r["horizon_h"] for r in metr],c="#c0392b",zorder=5,s=36,label="Measured (METR 50% time horizon)")
for r in metr: ax.annotate(r["model"],(d(r["date"]),r["horizon_h"]),xytext=(5,-10),textcoords="offset points",fontsize=7)
ax.axvline(date(2026,11,6),c="#bbb",lw=1); ax.text(date(2026,11,20),0.4,"Nov 2026",fontsize=8,color="#666")
ax.set_ylabel("Task length a model completes 50% of the time (expert hours)")
ax.set_title("AI Coder Evolution — November 2026 re-check")
ax.xaxis.set_major_locator(md.YearLocator()); ax.xaxis.set_major_formatter(md.DateFormatter("%Y"))
ax.grid(axis="y",alpha=.3); ax.legend(fontsize=8,loc="upper left"); fig.tight_layout(); fig.savefig("chart.png")
