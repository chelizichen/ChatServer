package main

import (
	"Simp/servers/ChatServer/src/routes"
	h "Simp/src/http"
)

func main() {
	ctx := h.NewSimpHttpCtx("simp.yaml")
	ctx.Use(routes.ServerRoutes)
	ctx.UseSPA("/web", "dist")
	h.NewSimpHttpServer(ctx)
}
