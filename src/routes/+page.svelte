<script lang="ts">
    // Placeholder state – später durch echte Logik ersetzen
    let kurs = '';
    let punkte = 0;
    let gewichtung = 1;
    let result = 0;

    function berechnen() {
        result = Math.max(0, Math.round(punkte * gewichtung));
    }

    const verlauf: { id: string; titel: string; summe: number; datum: string }[] = [
        { id: 'v1', titel: 'Projektwoche Robotik', summe: 28, datum: '2025-05-12' },
        { id: 'v2', titel: 'Mathe-Workshop', summe: 16, datum: '2025-04-20' }
    ];
</script>

<!-- Page Container -->
<div class="min-h-dvh bg-background text-foreground">
    <!-- Top Bar -->
    <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="size-8 rounded-md bg-primary/10 grid place-items-center text-primary font-bold">M</div>
                <div class="font-semibold tracking-tight">MINT-EC Punkte</div>
            </div>
            <nav class="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
                <a class="hover:text-foreground" href="#">Übersicht</a>
                <a class="hover:text-foreground" href="#">Regeln</a>
                <a class="hover:text-foreground" href="#">Profil</a>
            </nav>
        </div>
    </header>

    <!-- Main -->
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <!-- Page Title -->
        <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight">MINT-EC Punkte Berechnung</h1>
            <p class="text-sm text-muted-foreground">
                Trage deine Aktivitäten ein, berechne Punkte und behalte den Überblick.
            </p>
        </div>

        <!-- 3 Content Areas in responsive Grid -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- 1) Eingabe -->
            <div class="lg:col-span-1 rounded-xl border bg-card text-card-foreground shadow-sm">
                <div class="p-5 border-b">
                    <h2 class="text-lg font-medium">Eingabe</h2>
                    <p class="text-sm text-muted-foreground">Aktivität, Punkte und Gewichtung erfassen.</p>
                </div>
                <div class="p-5 space-y-4">
                    <div class="space-y-2">
                        <label class="text-sm font-medium">Aktivität/Kurs</label>
                        <input
                                class="w-full h-10 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                bind:value={kurs}
                                placeholder="z. B. Informatik AG"
                        />
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Punkte</label>
                            <input
                                    class="w-full h-10 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    type="number"
                                    min="0"
                                    bind:value={punkte}
                                    placeholder="0"
                            />
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium">Gewichtung</label>
                            <select
                                    class="w-full h-10 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    bind:value={gewichtung}
                            >
                                <option value="1">1x (Standard)</option>
                                <option value="1.5">1.5x</option>
                                <option value="2">2x</option>
                            </select>
                        </div>
                    </div>
                    <button
                            class="inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-95 transition"
                            on:click={berechnen}
                    >
                        Berechnen
                    </button>
                </div>
            </div>

            <!-- 2) Ergebnis -->
            <div class="lg:col-span-1 rounded-xl border bg-card text-card-foreground shadow-sm">
                <div class="p-5 border-b">
                    <h2 class="text-lg font-medium">Ergebnis</h2>
                    <p class="text-sm text-muted-foreground">Schnellübersicht deiner berechneten Punkte.</p>
                </div>
                <div class="p-5 space-y-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="rounded-lg border p-4">
                            <div class="text-xs text-muted-foreground">Eingegebene Punkte</div>
                            <div class="text-2xl font-semibold">{punkte}</div>
                        </div>
                        <div class="rounded-lg border p-4">
                            <div class="text-xs text-muted-foreground">Gewichtung</div>
                            <div class="text-2xl font-semibold">× {gewichtung}</div>
                        </div>
                    </div>
                    <div class="rounded-lg border p-5 bg-muted/30">
                        <div class="text-sm text-muted-foreground">Berechnetes Ergebnis</div>
                        <div class="mt-1 text-3xl font-bold tracking-tight">{result}</div>
                        <p class="mt-2 text-xs text-muted-foreground">
                            Hinweis: Rundung auf ganze Punkte; negative Ergebnisse werden auf 0 gesetzt.
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <button class="h-9 px-3 rounded-md border text-sm hover:bg-muted">Zurücksetzen</button>
                        <button class="h-9 px-3 rounded-md border text-sm hover:bg-muted">Speichern</button>
                    </div>
                </div>
            </div>

            <!-- 3) Verlauf / Regeln -->
            <div class="lg:col-span-1 rounded-xl border bg-card text-card-foreground shadow-sm">
                <div class="p-5 border-b flex items-center justify-between">
                    <div>
                        <h2 class="text-lg font-medium">Verlauf</h2>
                        <p class="text-sm text-muted-foreground">Zuletzt berechnete Aktivitäten.</p>
                    </div>
                    <button class="h-8 px-2 rounded-md border text-xs hover:bg-muted">Alle anzeigen</button>
                </div>
                <div class="p-5 space-y-4">
                    {#each verlauf as v}
                        <div class="rounded-lg border p-4 flex items-center justify-between">
                            <div>
                                <div class="text-sm font-medium">{v.titel}</div>
                                <div class="text-xs text-muted-foreground">{v.datum}</div>
                            </div>
                            <div class="text-base font-semibold">{v.summe} P</div>
                        </div>
                    {/each}

                    <div class="rounded-lg border p-4 bg-muted/30">
                        <div class="text-sm font-medium mb-1">Regelüberblick</div>
                        <ul class="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                            <li>Punkte je Aktivität gemäß Richtlinie festlegen.</li>
                            <li>Gewichtungen für besondere Leistungen anwenden.</li>
                            <li>Maximal- und Mindestgrenzen beachten.</li>
                        </ul>
                        <button class="mt-3 h-9 px-3 rounded-md border text-sm hover:bg-muted">Details</button>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="border-t">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-muted-foreground">
            <span>© 2025 MINT-EC Rechner</span>
            <a href="#" class="hover:text-foreground">Impressum</a>
        </div>
    </footer>
</div>