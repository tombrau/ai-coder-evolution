import json
k=50/350  # minutes per Sage unit (350 units == ~50 min, Claude 3.7 Sonnet, early 2025)
metr={"rows":[
 {"date":"2025-02-24","model":"Claude 3.7 Sonnet","horizon_h":0.83,"note":"~50 min; frontier when METR published the method (Mar 2025)"},
 {"date":"2025-08-07","model":"GPT-5","horizon_h":2.28,"note":"2 h 17 min"},
 {"date":"2025-11-24","model":"Claude Opus 4.5","horizon_h":4.82,"note":"~4 h 49 min, wide interval"},
 {"date":"2026-02-05","model":"Claude Opus 4.6","horizon_h":14.5,"note":"~14.5 h reported; other trackers ~12 h"},
 {"date":"2026-03-15","model":"Claude Mythos Preview (early)","horizon_h":17.41,"note":"At least 16 h (95% CI 8.5–55 h); METR says >16 h is unreliable"},
 {"date":"2026-06-15","model":"GPT-5.6 (Sol)","horizon_h":11.3,"note":"11 h 18 min when cheats scored as failures"}]}
sage=[];c=350.0;y,h=2025,1
for i in range(12):
    if (y,h)<(2027,1): g=1.2; ph="Baseline (20%)"
    elif (y,h)<(2028,2): g=2.2; ph="Self-improvement (120%)"
    else: g=4.5; ph="Quantum (350%)"
    sage.append({"period":f"{y} H{h}","date":f"{y}-{'03' if h==1 else '09'}-15","sage_units":round(c),"horizon_h":round(c*k/60,2),"phase":ph})
    c*=g; h=2 if h==1 else 1; y+= (h==1)
levels=[]
for n,u,p in [("Entry-level programmer",350,"2025 H1"),("Mid-level programmer",350*1.2**4*2.2,"2027 H2"),("Senior programmer",350*1.2**4*2.2**2,"2028 H1"),("Expert programmer",350*1.2**4*2.2**3,"2028 H2"),("Programming team",350*1.2**4*2.2**3*4.5,"2029 H1")]:
    levels.append({"level":n,"sage_units":round(u),"horizon_h":round(u*k/60,1),"sage_predicted":p})
growth={"rows":[
 {"rate":"Sage: baseline, to 2027","x_per_6mo":1.2,"kind":"Sage 2025 model"},
 {"rate":"Sage: self-improvement, 2027–28","x_per_6mo":2.2,"kind":"Sage 2025 model"},
 {"rate":"Sage: quantum, 2028 on","x_per_6mo":4.5,"kind":"Sage 2025 model"},
 {"rate":"Measured: long-run trend 2019–24 (7-month doubling)","x_per_6mo":round(2**(6/7),2),"kind":"Measured (METR)"},
 {"rate":"Measured: 2024–Feb 2026 (~105-day doubling)","x_per_6mo":round(2**(182.6/105),2),"kind":"Measured (METR)"}]}
scen={"rows":[{"scenario":"Fast","doubling_days":122,"why":"Recent pace continues (~4-month doubling)"},{"scenario":"Middle","doubling_days":213,"why":"Back to the long-run trend (~7-month doubling)"},{"scenario":"Slow","doubling_days":365,"why":"Slows to a yearly doubling"}]}
targets={"rows":[{"target":"A working week","hours":40},{"target":"Sage's 'programming team'","hours":levels[4]["horizon_h"]},{"target":"A working month","hours":167},{"target":"A working year","hours":2000}]}
events={"rows":[
 {"date":"2026-02-24","event":"Mercury 2 ships: first diffusion reasoning model, ~1,000 tokens/s. Mercury 3 followed on 19 Oct; Google's Gemini Diffusion is still experimental.","meaning":"Diffusion is real but not yet at the frontier, so it hasn't been the accelerant the 2026 prompt asked about."},
 {"date":"2026-03-15","event":"METR measures Claude Mythos Preview at a 50% time horizon of at least 16 h, the top of what its task suite can measure.","meaning":"The ruler has run out: progress since spring 2026 can't be read off the same scale."},
 {"date":"2026-04-13","event":"Stanford AI Index: employment of developers aged 22–25 down ~20% since late 2022, while older developers' grew.","meaning":"The entry-level rung is being hit first — Gemini's 'experience paradox' from your Round 1."},
 {"date":"2026-04-30","event":"Overall developer job postings up ~11% year on year (Indeed); BLS still projects 15% growth to 2034.","meaning":"Benchmarks say 'expert'; the job market says AI is a tool most teams still pair with people."},
 {"date":"2026-05-19","event":"METR Frontier Risk Report: labs reported no dramatic research speed-ups (Feb–Mar 2026 window).","meaning":"Self-improvement had not yet visibly compounded by spring."},
 {"date":"2026-07-29","event":"SWE-bench Pro tops out near 80% (Claude Mythos 5 80.3%); SWE-bench Verified at 95.5%.","meaning":"The main coding benchmarks are close to saturated."},
 {"date":"2026-09-06","event":"OpenAI says it reached its 'automated research intern' goal; agents logged 3.1 workdays per human workday in August. Target for a full automated researcher: March 2028.","meaning":"Sage's 2027 self-improvement inflection is arriving roughly on schedule — and by the labs' own account."},
 {"date":"2026-09-06","event":"Quantum: logical qubits in the dozens; reviews put broad quantum speed-ups of AI training several hardware generations away.","meaning":"Sage's 2028 quantum boost (350% per six months) looks the least likely part of the model."}]}
for n,d in {"metr_horizons":metr,"sage_model":{"rows":sage},"sage_levels":{"rows":levels},"growth_rates":growth,"scenarios":scen,"targets":targets,"events_2026":events}.items():
    json.dump(d,open(f"{n}.json","w"),indent=1)
print(json.dumps(levels,indent=0)); print(growth)
