if (ForestryConfig.particlesBeeHives) {
    const BeeParticles = [
        //forest
        Particles.registerParticleType({
            texture: "bee",
            size: [0.5, 0.5],
            lifetime: [80, 80]
        }),
        //meadows
        Particles.registerParticleType({
            texture: "bee",
            size: [0.5, 0.5],
            lifetime: [80, 80],
            color: [1, 0.7, 0.7, 1]
        }),
        //modest
        Particles.registerParticleType({
            texture: "bee",
            size: [0.5, 0.5],
            lifetime: [80, 80],
            color: [1, 1, 0.7, 1]
        }),
        //tropical
        Particles.registerParticleType({
            texture: "bee",
            size: [0.5, 0.5],
            lifetime: [80, 80],
            color: [0.1, 0.3, 0, 0.2]
        }),
        //wintry
        Particles.registerParticleType({
            texture: "bee",
            size: [0.5, 0.5],
            lifetime: [80, 80],
            color: [0.4, 1, 1, 0.8]
        }),
        //marshy
        Particles.registerParticleType({
            texture: "bee",
            size: [0.5, 0.5],
            lifetime: [80, 80],
            color: [0.1, 0.3, 0, 0.7]
        }),
        //ender
        Particles.registerParticleType({
            texture: "bee",
            size: [0.5, 0.5],
            lifetime: [80, 80],
            color: [0.8, 0, 1, 1]
        })
    ];

    function spawnBeeParticles(type, x, y, z) {
        let emitter = new Particles.ParticleEmitter(x + 0.5, y + 0.5, z + 0.5);
        emitter.setEmitRelatively(true);

        let amount = Util.random(2, 4);
        for (; amount > 0; amount--) {
            let xa = Math.random() <= 0.5 ? 0.02 : 0;
            let ya = Math.random() <= 0.5 ? 0.02 : 0;
            let za = Math.random() <= 0.5 ? 0.02 : 0;

            if (Math.random() <= 0.5) {
                xa = -xa;
                za = -za;
            }

            emitter.emit(type, 0, 0, 0, 0, xa, ya, za);
        }
    }

    Block.setAnimateTickCallback(BlockID.beehive, function (x, y, z, id, data) {
        spawnBeeParticles(BeeParticles[data], x, y, z);
    });
}