package com.papuzki.papuchaservice.model;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "papugi")
public class Papuga implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "weight")
    private int weight;

    @Enumerated(EnumType.STRING)
    @Column(name = "color")
    private Color Color;

    public Papuga(Long id, String name, int weight, com.papuzki.papuchaservice.model.Color color) {
        this.id = id;
        this.name = name;
        this.weight = weight;
        Color = color;
    }

    public Papuga() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public com.papuzki.papuchaservice.model.Color getColor() {
        return Color;
    }

    public void setColor(com.papuzki.papuchaservice.model.Color color) {
        Color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Papuga papuga = (Papuga) o;
        return id == papuga.id && weight == papuga.weight && Objects.equals(name, papuga.name) && Color == papuga.Color;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, weight, Color);
    }

    @Override
    public String toString() {
        return "Papuga{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", weight=" + weight +
                ", Color=" + Color +
                '}';
    }
}